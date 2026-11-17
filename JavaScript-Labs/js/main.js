
/*
    JavaScript Labs Portfolio
    Chức năng chuyển đổi giao diện sáng / tối
*/

// Lấy nút chuyển đổi giao diện từ HTML
const themeButton = document.getElementById("theme-toggle");

// Xử lý sự kiện khi người dùng nhấn nút
themeButton.addEventListener("click", function () {

    // Thêm hoặc xóa class dark trên body
    const isDark = document.body.classList.toggle("dark");

    // Cập nhật nội dung nút
    if (isDark) {
        themeButton.textContent = "☀️ Giao diện sáng";
    } else {
        themeButton.textContent = "🌙 Giao diện tối";
    }

    // Cập nhật trạng thái cho công nghệ hỗ trợ
    themeButton.setAttribute("aria-pressed", String(isDark));
});
