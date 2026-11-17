/* Exercise 10.8 - Complex Animations */
$(function () {
    $('button').on('click', function () {
        // Khôi phục vị trí gốc để có thể chạy hoạt ảnh nhiều lần.
        $('#box').stop(true, true)
            .css({left: '38px', top: '95px', opacity: 0.4, height: '150px'})
            .animate({left: '495px', opacity: '1', height: '50px'})
            .animate({top: '400px', opacity: '0.2'})
            .animate({height: '200px'}, 2000);
    });
});
