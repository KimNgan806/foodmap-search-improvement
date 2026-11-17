/* Exercise 10.9 - GET Requests / $.get(), $.each() */
$(function () {
    var remoteUrl = 'https://www.randyconnolly.com/funwebdev/services/travel/cities.php';
    var localUrl = 'data/cities.json';

    function normalizeCities(data) {
        if (typeof data === 'string') {
            try { data = JSON.parse(data); } catch (e) { return []; }
        }
        if (Array.isArray(data)) return data;
        if (data && Array.isArray(data.cities)) return data.cities;
        return [];
    }

    function showCities(data, sourceLabel) {
        var cities = normalizeCities(data);
        if (!cities.length) return false;
        var list = $('<ul></ul>');
        $.each(cities, function (index, city) {
            $('<li></li>').text(city.name || '').appendTo(list);
        });
        $('#results').empty()
            .append($('<p></p>').text(sourceLabel))
            .append(list);
        return true;
    }

    function fallback() {
        $.getJSON(localUrl)
            .done(function (data) {
                if (!showCities(data, 'Dữ liệu mẫu dự phòng (file JSON cục bộ):')) {
                    $('#results').text('Không tìm thấy dữ liệu thành phố.');
                }
            })
            .fail(function () {
                $('#results').text('Không tải được dữ liệu. Hãy chạy bằng Live Server.');
            });
    }

    $('#consume').on('click', function () {
        $('#results').text('Đang tải danh sách thành phố...');
        // Ưu tiên dịch vụ được nêu trong PDF; dùng JSON mẫu nếu dịch vụ lỗi/CORS.
        $.get(remoteUrl, function (data, status) {
            if (status === 'success' && showCities(data, 'Dữ liệu từ dịch vụ web:')) return;
            fallback();
        }).fail(fallback);
    });
});
