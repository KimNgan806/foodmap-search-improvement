/* Exercise 10.4 - jQuery Listeners: phiên bản cuối của bài */
$(function () {
    $('.panel')
        .on('mousemove', function (e) {
            $('#message').html('x=' + e.pageX + ' y=' + e.pageY);
        })
        .on('mouseleave', function () {
            $('#message').html('goodbye!');
        })
        .on('click', function () {
            $('#message').html('stopped move reporting');
            $('.panel').off('mousemove');
        });
});
