/* Exercise 10.7 - More jQuery Animation / Image Preview */
$(function () {
    $('figure img').on('mouseenter', function (e) {
        // Tìm ảnh cỡ medium từ đường dẫn ảnh small đang hiển thị.
        var alt = $(this).attr('alt');
        var src = $(this).attr('src');
        var newsrc = src.replace('/small/', '/medium/');

        $('#preview').remove();
        var preview = $('<div id="preview"></div>');
        var image = $('<img>').attr({src: newsrc, alt: alt});
        var caption = $('<p></p>').text(alt);

        preview.append(image).append(caption);
        $('body').append(preview);

        $(this).addClass('gray');
        movePreview(e);
        $('#preview').fadeIn(1000);
    });

    function removePreview() {
        $(this).removeClass('gray');
        $('#preview').stop(true, true).remove();
    }

    function movePreview(e) {
        $('#preview')
            .css('top', (e.pageY - 10) + 'px')
            .css('left', (e.pageX + 30) + 'px');
    }

    $('figure img').on('mouseleave', removePreview);
    $('figure img').on('mousemove', movePreview);
});
