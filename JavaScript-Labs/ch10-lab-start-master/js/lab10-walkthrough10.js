/* Exercise 10.10 - jqXHR Handling: done(), fail(), always() */
$(function () {
    var remoteUrl = 'https://www.randyconnolly.com/funwebdev/services/travel/cities.php';
    var localUrl = 'data/cities.json';
    $('.animLoading').hide();

    function normalizeCities(data) {
        if (typeof data === 'string') {
            try { data = JSON.parse(data); } catch (e) { return []; }
        }
        if (Array.isArray(data)) return data;
        if (data && Array.isArray(data.cities)) return data.cities;
        return [];
    }

    function renderCities(data, label) {
        var cities = normalizeCities(data);
        if (!cities.length) return false;
        var list = $('#results ul').empty();
        $.each(cities, function (index, city) {
            $('<li></li>').text(city.name || '').appendTo(list);
        });
        $('#results .source').remove();
        $('#results').prepend($('<p class="source"></p>').text(label));
        return true;
    }

    function fallback() {
        $.getJSON(localUrl)
            .done(function (data) {
                if (!renderCities(data, 'Dữ liệu mẫu dự phòng (file JSON cục bộ):')) {
                    $('#results').text('Không tìm thấy dữ liệu thành phố.');
                }
            })
            .fail(function (xhr, status, error) {
                $('#results').text('Không tải được dữ liệu: ' + (error || status));
            })
            .always(function () {
                $('.animLoading').fadeOut('slow');
            });
    }

    $('#consume').on('click', function () {
        $('#results .source').remove();
        $('#results ul').empty();
        $('.animLoading').show();
        var usingFallback = false;

        $.get(remoteUrl)
            .done(function (data) {
                if (!renderCities(data, 'Dữ liệu từ dịch vụ web:')) {
                    usingFallback = true;
                    fallback();
                }
            })
            .fail(function (xhr, status, error) {
                // Khi dịch vụ bên ngoài lỗi, vẫn minh họa .fail và tải dữ liệu mẫu.
                console.warn('Lỗi dịch vụ web:', status, error);
                usingFallback = true;
                fallback();
            })
            .always(function () {
                if (!usingFallback) $('.animLoading').fadeOut('slow');
            });
    });
});
