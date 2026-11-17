/* code goes here */
console.log(document.getElementById("first"));
console.log(document.getElementById("first").firstChild);
console.log(document.getElementById("first").firstChild.nextSibling);
console.log(document.getElementById("first").parentNode);
// Truy xuất khu vực chứa các bài viết
var stories = document.getElementById("stories");

// Duyệt qua tất cả nút con
for (var i = 0; i < stories.childNodes.length; i++) {

    // Hiển thị thông tin nút trong Console
    console.log(
        "child " + i + " = " + stories.childNodes[i] +
        " nodeType=" + stories.childNodes[i].nodeType
    );

    // Chỉ thay đổi màu nền của phần tử HTML
    if (stories.childNodes[i].nodeType === 1) {
        stories.childNodes[i].style.backgroundColor = "green";
    }
}