---
date: 2020-04-11
title: 'Sử dụng CSS'
template: post
thumbnail: '../thumbnails/css.png'
slug: cach-su-dung-css-va-scss-cho-trang-web
toc: true
tags:
  - CSS
keywords:
  - CSS cơ bản
  - Cách sử dụng css
  - Các lệnh css cơ bản
---

<abbr tooltip="Cascading Style Sheets">CSS</abbr> là một ngôn ngữ được sử dụng để tìm và định dạng lại các phần tử được tạo ra bởi các ngôn ngữ đánh dấu (ví dụ như <abbr tooltip="Hypertext Markup Language">HTML</abbr>). Bạn có thể hiểu đơn giản rằng, nếu HTML đóng vai trò định dạng các phần tử trên trang web như việc tạo ra các đoạn văn bản, các tiêu đề, hình ảnh,… thì CSS sẽ giúp chúng ta trang điểm lại các phần tử HTML đó như đổi màu sắc trang, đổi màu chữ, thay đổi cấu trúc,…

<div class="alert alert-primary" role="alert" markdown="1">
Ghi chú này sẽ được cập nhật thường xuyên
</div>

## Các thuộc tính trong CSS
### Thuộc tính **text-transform**

| Ví dụ                       | Mô tả                                                           |
| --------------------------- | --------------------------------------------------------------- |
| text-transform: none;       | Trả văn bản về dạng mặc định ban đầu.                           |
| text-transform: capitalize; | Chữ cái đầu tiên của mỗi từ là chữ in hoa.                      |
| text-transform: uppercase;  | Tất cả chữ trong văn bản thành chữ in hoa.                      |
| text-transform: lowercase;  | Tất cả chữ trong văn bản thành chữ thường.                      |
| text-transform: inherit;    | Thừa hưởng thuộc tính từ thành phần cha (thành phần bao ngoài). |

### Thuộc tính **display flex**

| Ví dụ                       | Mô tả                                                           |
| --------------------------- | --------------------------------------------------------------- |
| display flex: flex;         | Giúp các thành phần linh hoạt.                           |
| display flex: inline-flex;  | Giúp các thành phần linh hoạt dưới dạng các inline.                      |

## Sử dụng **FontAwesome 5** trong CSS

```CSS
.login:before {
  content: "\f007";
  font-family: "Font Awesome 5 Free"; 
  font-weight: 900;
}
```