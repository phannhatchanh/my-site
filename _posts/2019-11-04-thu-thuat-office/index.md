---
date: 2019-11-04
title: 'Sử dụng Office Word, Excel, Powerpoint'
template: post
thumbnail: '../thumbnails/list.png'
slug: thu-thuat-office
toc: true
keywords:
  - Office Tips
  - Thủ thuật Office
  - Thủ thuật văn phòng
---

<div class="alert alert-warning" role="alert" markdown="1">
Ghi chú này được cập nhật thường xuyên mà không cần thông báo!
</div>

## Microsoft Word
- Trong khi làm việc với MS Word nếu chẳn may bị mất điện mà không kịp lưu file word? Không có cả file Recover? Hãy vào My Computer hoặc This PC (windows 10) tìm file với phần mở rộng `.asd` và mở nó bằng MS Word đây chính là bản nháp bạn đang gõ.
- *Lặp lại tiêu đề của Table trên trang tiếp theo*: Khi làm việc với một table rất dài, nó sẽ chạy qua nhiều trang. Để các hàng tiêu đề của table xuất hiện trên mỗi trang tự động chọn dãy lệnh `Layout` &rarr; nhóm lệnh `Data` &rarr; `Repeat Header Rows`.

### Find and Replace
- Loại bỏ khoảng cách giữa các từ trong Word
  1. Nhấn tổ hợp phím <kbd>Ctrl</kbd> + <kbd>H</kbd>. Chọn tab **Replace**
  2. Bấm vào **More >>** và đánh dấu chọn **Use wildcards**
  3. Tại ô **Find what:** `( ){2,}` và ô **Replace width:** `\1`
  4. Cuối cùng bấm **Replace all**
  
## Microsoft Powerpoint
- Lưu file Powerpoint ở định dạng `.ppsx` khi mở file bạn sẽ được chuyển thẳng đến phần trình chiếu.

## Microsoft Excel
- Để *nối một địa chỉ ô tính với một chuỗi* (hoặc chuỗi-chuỗi, ôtính-ôtính), ta sử dụng toán tử `&` Ví dụ: `=B2&"@gmail.com"`
- *Tách họ và tên thành hai cột trong excel*: 
  - Sao chép khối dữ liệu cần tách ra vị trí khác đồng thời chọn luôn khối dữ liệu cần tách, tiếp theo mở chức năng **Replace** (hoặc tổ hợp phím <kbd>Ctrl</kbd> + <kbd>H</kbd>) tại ô **Find what:** gõ `* (kèm dấu khoảng cách)` và bấm **Replace All**
  - Công thức `=LEFT(B5,LEN(B5)-LEN(C5))` (Lưu ý: Excel 2010 thì dùng dấu `;` Excel 2013 trở về sau thì dùng dấu `,`)

  ![Hướng dẫn cách tách họ và tên trong excel](cach-tach-ho-va-ten-thanh-2-cot-nhanh-trong-excel.gif "Tách họ và tên bằng công thức trong excel")

