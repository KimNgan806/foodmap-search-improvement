/* code goes here */
function simpleHandler(event) {
    var content = document.getElementById("content");

    if (btn.innerHTML == "Hide") {
        btn.innerHTML = "Show";
        content.className = "makeItDisappear";

        // Ẩn nội dung sau 1000 milliseconds
        setTimeout(function () {
            content.style.display = "none";
        }, 1000);
    }
    else {
        btn.innerHTML = "Hide";
        content.style.display = "block";

        // Khôi phục nội dung sau 500 milliseconds
        setTimeout(function () {
            content.className = "makeItNormal";
        }, 500);
    }
}

var btn = document.getElementById("testButton");
btn.addEventListener("click", simpleHandler);
var img = document.getElementById("mainImage");

img.addEventListener("mouseover", function (event) {
    img.className = "makeItGray";
});
img.addEventListener("mouseout", function (event) {
    img.className = "makeItNormal";
});