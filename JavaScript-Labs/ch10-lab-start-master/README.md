# Lab 10 – JavaScript 3: jQuery

**Sinh viên:** Trần Thị Kim Ngân  
**MSSV:** 31241027118  
**Học phần:** Phát triển ứng dụng thương mại điện tử – UEH

## Các bài thực hành

| Bài | Nội dung | Trang chạy |
|---|---|---|
| 10.1 | Set Up jQuery: CDN và bản cục bộ | [Mở](lab10-walkthrough01.html) |
| 10.2 | Basic Selectors | [Mở](lab10-walkthrough01.html) |
| 10.3 | Advanced Selectors | [Mở](lab10-walkthrough03.html) |
| 10.4 | jQuery Listeners | [Mở](lab10-walkthrough04.html) |
| 10.5 | Inserting DOM Elements | [Mở](lab10-walkthrough05.html) |
| 10.6 | Simple jQuery Animation | [Mở](lab10-walkthrough06.html) |
| 10.7 | More jQuery Animation | [Mở](lab10-walkthrough07.html) |
| 10.8 | Complex Animations | [Mở](lab10-walkthrough08.html) |
| 10.9 | GET Requests | [Mở](lab10-walkthrough09.html) |
| 10.10 | jqXHR Handling | [Mở](lab10-walkthrough10.html) |

[Trang tổng hợp Lab 10](index.html)

## Ghi chú triển khai

- Cấu trúc thư mục giữ tên `ch10-lab-start-master`, tên HTML/JS giữ đúng bộ tài liệu.
- Exercise 10.1 và 10.2 **dùng chung** `lab10-walkthrough01.html` và `js/lab10-walkthrough02.js`.
- jQuery ưu tiên CDN qua HTTPS, có bản fallback tại `js/jquery-3.1.1.min.js` để chạy khi không có mạng.
- Đối với 10.2, dùng `$('#pageTitle').html('new Title')` thay vì xóa toàn bộ `#first`, nhằm tránh xóa textarea cần dùng ở các selector sau.
- Với 10.9–10.10, bài gốc gọi dịch vụ thành phố qua HTTP. Mã nguồn đổi sang HTTPS và có dữ liệu JSON **mẫu dự phòng** ở `data/cities.json` khi dịch vụ lỗi hoặc bị chặn CORS. Dữ liệu dự phòng không phải dữ liệu trực tiếp từ dịch vụ.
- Nên dùng **Live Server** để các lệnh AJAX lấy JSON cục bộ hoạt động; mở HTML với `file://` có thể bị hạn chế.
- Các mã nguồn được viết nhằm thể hiện **trạng thái kết thúc** của từng bài, không phải ảnh chụp các trạng thái trung gian trong PDF.
