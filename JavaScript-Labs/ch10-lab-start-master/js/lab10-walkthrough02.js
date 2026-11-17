/* Exercise 10.2 - Basic Selectors (10.1 là thiết lập thư viện jQuery) */
$(function () {
    // Truy xuất textarea theo ID và thay đổi value.
    var msg = $('#msgArea');
    msg.val('here is some new text');

    // Bài gốc minh họa $('#first').html('new Title'), nhưng thao tác này
    // xóa cả textarea bên trong #first, làm các bước phía sau không còn tác dụng.
    // Dùng #pageTitle để vẫn thấy được kết quả của tất cả selector trên cùng trang.
    $('#pageTitle').html('new Title');

    // Lấy thuộc tính class, cập nhật nội dung của textarea.
    $('#msgArea').val('My class is ' + $('#msgArea').attr('class'));

    // Chọn nhiều phần tử cùng lúc và đổi màu nền.
    var buttons = $('button');
    buttons.css('background-color', 'red');

    var temp = $('body');
    temp.css('background-color', 'ivory');

    // Bổ sung class cho tất cả khối đếm ở cuối trang.
    $('.center-icons').addClass('selected');
});
