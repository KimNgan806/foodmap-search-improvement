# FOODMAP – Cải tiến giao diện tìm kiếm sản phẩm

## 1. Giới thiệu bài tập

Dự án được thực hiện trong khuôn khổ môn **Phát triển ứng dụng WEB/TMĐT**, tiếp tục phát triển giao diện website đã xây dựng ở Buổi 1.

Bài tập Buổi 2 tập trung củng cố kiến thức HTML5 và CSS3 thông qua việc điều chỉnh cấu trúc HTML, định dạng giao diện, tổ chức bố cục sản phẩm và bổ sung hiệu ứng tương tác cơ bản.

## 2. Website tham khảo và khu vực cải tiến

- **Website tham khảo:** [FOODMAP](https://foodmap.asia/)
- **Khu vực cải tiến:** Giao diện tìm kiếm và danh sách sản phẩm gợi ý.
- **Nội dung chính:** Thanh tìm kiếm, từ khóa gợi ý, thông báo không tìm thấy kết quả và bốn thẻ sản phẩm minh họa.

## 3. Những kỹ thuật HTML5/CSS3 đã thực hành

**HTML5:**
- Sử dụng các phần tử có ngữ nghĩa: `header`, `main`, `section`, `article`, `footer`.
- Tổ chức tiêu đề theo thứ bậc `h1`, `h2`, `h3`.
- Cải thiện thuộc tính `alt` của hình ảnh và `aria-label` cho liên kết sản phẩm.

**CSS3:**
- CSS Selector: Element, Class và Descendant Selector.
- Box Model: `margin`, `padding`, `border`, `border-radius`.
- Flexbox: `display: flex`, `justify-content`, `align-items`, `gap`.
- CSS Grid: `grid-template-columns`, `repeat()`, `gap`.
- Responsive Design với Media Queries.
- Hiệu ứng `hover`, `focus-visible` và `transition`.

## 4. Hướng dẫn chạy website

1. Tải hoặc clone repository về máy tính.
2. Mở thư mục dự án bằng Visual Studio Code.
3. Mở file `index.html` bằng Live Server hoặc trình duyệt.
4. Kiểm tra giao diện và các hiệu ứng tương tác.

**Các tệp chính:**
- `index.html`: Cấu trúc HTML của website.
- `style.css`: Định dạng CSS và bố cục giao diện.
- `images/`: Chứa bốn hình ảnh sản phẩm.
- `AI_USAGE.md`: Nhật ký sử dụng AI.

## 5. Những thay đổi đã thực hiện

- Cải thiện mô tả hình ảnh sản phẩm bằng thuộc tính `alt`.
- Thay đổi font chữ từ Arial sang **Be Vietnam Pro**.
- Điều chỉnh màu chữ và màu nền theo phong cách xanh lá của FOODMAP.
- Thực hành Box Model để điều chỉnh khoảng cách, đường viền và bo góc thẻ sản phẩm.
- Sử dụng Flexbox để căn chỉnh các từ khóa gợi ý tìm kiếm.
- Sử dụng CSS Grid để bố trí danh sách sản phẩm.
- Bổ sung hiệu ứng Hover và Focus-visible cho liên kết “Xem sản phẩm”.
- Phát hiện khoảng cách chưa hợp lý giữa tên sản phẩm và giá bán, đề xuất điều chỉnh CSS.

**Kết quả điều chỉnh cuối cùng:** [TỰ ĐIỀN: Bổ sung sau khi kiểm tra và xác nhận thay đổi ở Bước 8.]

## 6. Sử dụng AI và kiểm chứng kết quả

**Công cụ AI:** ChatGPT.

AI được sử dụng để hỗ trợ phân tích mã HTML/CSS, giải thích kiến thức, đề xuất cải thiện giao diện và tìm nguyên nhân lỗi.

Các đề xuất được kiểm tra thông qua:
- Chạy giao diện bằng Live Server.
- Quan sát thay đổi trước và sau khi chỉnh sửa.
- Sử dụng Chrome DevTools để kiểm tra thuộc tính CSS.
- Kiểm tra quá trình tải font Be Vietnam Pro trong Network, xác nhận tài nguyên font trả về trạng thái HTTP 200.
- Rà soát và sửa lỗi lồng quy tắc CSS khi thực hành Hover và Focus.

Những đề xuất AI được xem xét trước khi áp dụng, không sử dụng nguyên trạng nếu chưa phù hợp với mã nguồn thực tế.

Nhật ký sử dụng AI được trình bày trong file `AI_USAGE.md`.

## 7. Liên kết dự án

- **GitHub Repository:** https://github.com/KimNgan806/foodmap-search-improvement
- **Website demo:** https://kimngan806.github.io/foodmap-search-improvement/

*Website hiện là giao diện minh họa bằng HTML/CSS. Chức năng tìm kiếm thực tế và trang chi tiết sản phẩm chưa được triển khai.*