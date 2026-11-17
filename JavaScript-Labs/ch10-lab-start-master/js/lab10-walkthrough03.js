/* Exercise 10.3 - Advanced Selectors */
$(function () {
    // Bước thử nghiệm ban đầu trong PDF, đã comment theo yêu cầu Bước 3.
    // $(':password').css('background-color', 'yellow');

    // Chọn mỗi phần tử con thứ tư trong biểu mẫu.
    $('form :nth-child(4n)').css('background-color', 'yellow');

    // Đổi màu chữ nhãn chứa chuỗi "word" (Password / Password Again).
    $('label:contains("word")').css('color', 'black');
});
