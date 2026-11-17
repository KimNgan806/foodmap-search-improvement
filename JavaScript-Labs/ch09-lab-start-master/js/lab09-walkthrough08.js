/* code goes here */
function init() {
    const form = document.getElementById("sampleForm");
    form.addEventListener("submit", checkForEmptyFields);
}

window.addEventListener("load", init);

function checkForEmptyFields(event) {
    const errorArea = document.getElementById("errors");

    // Xóa thông báo cũ và ẩn vùng lỗi
    errorArea.textContent = "";
    errorArea.className = "hidden";

    const fields = document.querySelectorAll(
        'input[type="text"], input[type="password"]'
    );

    const emptyFields = [];

    // Kiểm tra từng ô nhập liệu
    for (let i = 0; i < fields.length; i++) {
        if (fields[i].value === "") {
            emptyFields.push(fields[i].id);
        }
    }

    // Hiển thị thông báo khi có trường bỏ trống
    if (emptyFields.length > 0) {
        event.preventDefault();

        const message =
            "The following fields can't be empty: " +
            emptyFields.join(", ");

        const paragraph = document.createElement("p");
        paragraph.textContent = message;

        errorArea.appendChild(paragraph);
        errorArea.className = "visible";
    }
}
