/* Exercise 10.6 - Simple jQuery Animation */
$(function () {
    $('#btnFadeIn').on('click', function () {
        $('figure').stop(true, true).fadeIn(1000);
    });

    $('#btnFadeOut').on('click', function () {
        $('figure').stop(true, true).fadeOut(1000);
    });

    $('#btnFade').on('click', function () {
        $('figure').stop(true, true).fadeToggle(500);
    });

    $('#btnSlideDown').on('click', function () {
        $('figure').stop(true, true).slideDown('slow');
    });

    $('#btnSlideUp').on('click', function () {
        $('figure').stop(true, true).slideUp('slow');
    });

    $('#btnSlide').on('click', function () {
        $('figure').stop(true, true).slideToggle(2000);
    });
});
