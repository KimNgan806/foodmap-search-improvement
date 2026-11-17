/* Exercise 10.5 - Inserting DOM Elements: kết quả Bước 8 */
$(function () {
    var img = $('<img src="images/art/thumbs/13030.jpg" alt="Ảnh tác phẩm được thêm bằng jQuery">');
    var panel = $('.panel');

    // Các phương thức đã thử trong quá trình thực hành:
    // panel.after(img);
    // panel.before(img);
    // panel.append(img);
    // panel.prepend(img);
    // img.appendTo(panel);
    // img.prependTo(panel);

    // Thao tác cuối theo yêu cầu PDF: chèn ảnh trước panel.
    img.insertBefore(panel);
});
