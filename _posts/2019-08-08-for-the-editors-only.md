---
date: 2019-08-08
title: 'For me only'
---

<div class="alert alert-warning">
Bài đăng này chỉ dành cho tôi để viết bài và nó sẽ được cập nhật thường xuyên mà không cần thông báo! Các bạn vui lòng <a href="/blog/">đọc các bài khác</a> nhé!
</div>

## Chuẩn chung cho bài viết

<div class="alert alert-success">Nội dung bài viết được soạn trên file markdown (.md). Nếu bạn chưa hiểu về nó hãy xem <a href="https://about.gitlab.com/handbook/product/technical-writing/markdown-guide/" rel="noopener noreferrer" target="_blank">Markdown Guide</a> - <a href="/markdown/">Markdown Shortcuts</a> - <a href="https://markdown-it.github.io/" rel="noopener noreferrer" target="_blank">chuẩn Markdown</a></div>

- `date` : Hiển thị ngày cập nhật, dạng `YYYY-MM-DD`.
- `dateModified` : Hiển thị ngày sửa đổi, dạng `YYYY-MM-DD`.
- `title` : 'Tiêu đề của bài viết'.
- `subtitle` : 'Đoạn mô tả ngắn cho bài viết hoặc trang'.
- `template`: Sử dụng `post` hoặc `page`.
- `thumbnail` : Đường dẫn chứa ảnh.
- `slug` : url của bài viết.
- `categories` : Bài viết này thuộc chủ đề gì? Lưu ý chỉ nên có 1 chủ đề duy nhất. Xem danh sách các chủ đề đã sử dụng ở mục [categories](../categories/).
- `tags` : Các `tag` liên quan đến bài viết, bạn xem thêm các nhãn đã được sử dụng ở mục [tags](../tags/). Nếu nhiều `tag` thì bạn viết theo cấu trúc `["tag1","tag2",...]`.
- `draft` : `true` (Bài viết ở chế độ không công khai)
- `toc` : `true` (Nếu bạn muốn hiển thị **Table of Content**. chỉ áp dụng cho bài viết)
- `comment` : `true` (Nếu bạn muốn bật chức năng bình luận cho bài viết)

## Chèn các câu hỏi
- Sử dụng `<h2 class="question">Câu hỏi</h2>`

## Phông chữ & văn bản
- Ký hiệu trùng với Markdown: `\*text*` (thêm dấu `\` trước những kí hiệu đó)
- Sử dụng các <mark>class</mark>:
  - Căn chỉnh `.text-right` `.text-center` `.text-justify` `.vertical-center` `.flex`
  - Display `.block` `.inline-block` `.inline`
  - Trạng thái hiển thị `.show` `.hide`
  - Màu sắc văn bản `.green` `.red` `.pink` `.blue` `.yellow`
  - Thông báo `<p class="alert alert-warning">` `<p class="alert alert-success">`
  - Ghi chú `note`
- Văn bản được đánh dấu: `<mark>texts</mark>`
- Bàn phím <kbd>Ctrl</kbd> + <kbd>A</kbd> `<kbd>Ctrl</kbd> + <kbd>A</kbd>`
- Huy hiệu <new />: `<new />`
- Huy hiệu <update />: `<update />`

## Chèn các thành phần
### Hộp thông báo của Bootstrap
```html
<div class="alert alert-warning" role="alert" markdown="1">
alert warning
</div>
```
<div class="alert alert-warning">
alert warning
</div>

```html
<div class="alert alert-success" role="alert" markdown="1">
alert success
</div>
```

<div class="alert alert-success">
alert success
</div>

```html
<div class="alert alert-primary" role="alert" markdown="1">
alert primary
</div>
```

<div class="alert alert-primary">
alert primary
</div>

### Hộp tự định nghĩa
<div class="def-box" markdown="1" id="dn1">
  <div class="box-title" markdown="1">
    Tiêu đề
  </div>
  <div class="box-content" markdown="1">
Nội dung

```html
<div class="def-box" markdown="1" id="dn1">
  <div class="box-title" markdown="1">
    Tiêu đề
  </div>
  <div class="box-content" markdown="1">
    Nội dung
  </div>
</div>
```
  </div>
</div>

<fieldset class="field-set">
  <legend class="leg-title">Tiêu đề</legend>
  Nội dung

  ```html
  <fieldset class="field-set">
    <legend class="leg-title">Tiêu đề</legend>
    <p class="tomtat">Nội dung...</p>
  </fieldset>
  ```
</fieldset>

### Sử dụng Emoji
- Danh sách các biểu tượng cảm xúc <a href="https://github.com/matchilling/gatsby-remark-emojis/blob/master/emoji.md" rel="noopener noreferrer" target="_blank">ở đây</a>
- Để hiển thị con gà :chicken: bản chỉ cần gõ <mark>&#58;chicken&#58;</mark>

<div class="alert alert-warning" role="alert" markdown="1">
:warning: Đôi khi, chức năng này tạo ra một số lỗi không mong muốn. Bạn có thể sao chép và dán trực tiếp biểu tượng cảm xúc từ <a href="https://getemoji.com/" rel="noopener noreferrer" target="_blank">trang web này</a>.
</div>

## Grid System

```html
<div class="flex-row">
	<div class="flex-small">1</div>
	<div class="flex-small">2</div>
</div>
<div class="flex-row">
	<div class="flex-large">3</div>
	<div class="flex-large">4</div>
</div>
```

<div class="flex-row">
	<div class="flex-small"><div style="padding: 1rem 0px; text-align: center; border: 1px solid rgb(238, 238, 238);">1</div></div>
	<div class="flex-small"><div style="padding: 1rem 0px; text-align: center; border: 1px solid rgb(238, 238, 238);">2</div></div>
</div>
<div class="flex-row">
	<div class="flex-large"><div style="padding: 1rem 0px; text-align: center; border: 1px solid rgb(238, 238, 238);">3</div></div>
	<div class="flex-large"><div style="padding: 1rem 0px; text-align: center; border: 1px solid rgb(238, 238, 238);">4</div></div>
</div>

```html
<div class="row">
  <div class="col-12">12</div>
</div>

<div class="row">
  <div class="col-3">3</div>
  <div class="col-9">9</div>
</div>

<div class="row">
  <div class="col-6">6</div>
  <div class="col-6">6</div>
</div>

<div class="row">
  <div class="col">auto</div>
  <div class="col">auto</div>
  <div class="col">auto</div>
</div>

<div class="row">
  <div class="col">auto</div>
  <div class="col">auto</div>
  <div class="col">auto</div>
  <div class="col">auto</div>
</div>
```

<div class="row">
  <div class="col-12"><div style="padding: 1rem 0px; text-align: center; border: 1px solid rgb(238, 238, 238);">12</div></div>
</div>

<div class="row">
  <div class="col-3"><div style="padding: 1rem 0px; text-align: center; border: 1px solid rgb(238, 238, 238);">3</div></div>
  <div class="col-9"><div style="padding: 1rem 0px; text-align: center; border: 1px solid rgb(238, 238, 238);">9</div></div>
</div>

<div class="row">
  <div class="col-6"><div style="padding: 1rem 0px; text-align: center; border: 1px solid rgb(238, 238, 238);">6</div></div>
  <div class="col-6"><div style="padding: 1rem 0px; text-align: center; border: 1px solid rgb(238, 238, 238);">6</div></div>
</div>

<div class="row">
  <div class="col"><div style="padding: 1rem 0px; text-align: center; border: 1px solid rgb(238, 238, 238);">auto</div></div>
  <div class="col"><div style="padding: 1rem 0px; text-align: center; border: 1px solid rgb(238, 238, 238);">auto</div></div>
  <div class="col"><div style="padding: 1rem 0px; text-align: center; border: 1px solid rgb(238, 238, 238);">auto</div></div>
</div>

<div class="row">
  <div class="col"><div style="padding: 1rem 0px; text-align: center; border: 1px solid rgb(238, 238, 238);">auto</div></div>
  <div class="col"><div style="padding: 1rem 0px; text-align: center; border: 1px solid rgb(238, 238, 238);">auto</div></div>
  <div class="col"><div style="padding: 1rem 0px; text-align: center; border: 1px solid rgb(238, 238, 238);">auto</div></div>
  <div class="col"><div style="padding: 1rem 0px; text-align: center; border: 1px solid rgb(238, 238, 238);">auto</div></div>
</div>

## Gallery Pictures

<div class="gallery">
  <div class="gallery-list">
    <a href="https://live.staticflickr.com/2906/14043022708_a751710889_b.jpg" class="gallery-item">        
      <img src="https://live.staticflickr.com/2906/14043022708_a751710889_b.jpg" class="gallery-image">
    </a>    
    <div class="gallery-item" data-src="https://live.staticflickr.com/2929/14043033009_89d7fb977e_b.jpg"></div>
    <div class="gallery-item" data-src="https://live.staticflickr.com/5548/14229676345_6d116f71ae_b.jpg"></div>
    <div class="gallery-item" data-src="https://live.staticflickr.com/5484/14226376911_95450b42d5_b.jpg"></div>
    <div class="gallery-item" data-src="https://live.staticflickr.com/5537/14043050200_58aca65686_b.jpg"></div>
  </div>
  <div class="gallery-bar"></div>
  <noscript class="gallery-noscript"><p>Turn on JavaScript to view screenshots.</p></noscript>
</div>

## Các bước (step by step)

```html
<div  class="pnc-step">

  <div class="step">
    <div class="step-number"></div>
    <div class="step-content" markdown="1">
      Content of step 1.
    </div>
  </div>

  <div class="step">
    <div class="step-number"></div>
    <div class="step-content" markdown="1">
      Content of step 2.
    </div>
  </div>

</div>
```

<div  class="pnc-step">
  <div class="step">
    <div class="step-number"></div>
    <div class="step-content" markdown="1">
      Nội dung của bước 1.
    </div>
  </div>
  <div class="step">
    <div class="step-number"></div>
    <div class="step-content" markdown="1">
      Nội dung của bước 2.
    </div>
  </div>
</div>

## Hình bên và nội dung
```html
<div class="columns-2" markdown="1">
Texts

![alt](/link)
</div>
```

## Ẩn-Hiện nội dung
Xem trước: 
<a href="#" onclick="$('.visibility').visibilityToggle(); return false;">Toggle</a>
<a href="#" onclick="$('.visibility').visibilityShow(); return false;">Show</a>
<a href="#" onclick="$('.visibility').visibilityHide(); return false;">Hide</a>
<p class="visibility">
	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptatem cum provident aperiam ad deleniti maiores debitis, tempore quis voluptate adipisci dignissimos. Atque cumque voluptatibus sit architecto tenetur, perferendis aperiam.
</p>

```html
<a href="#" onclick="$('.visibility').visibilityToggle(); return false;">Toggle</a>
<a href="#" onclick="$('.visibility').visibilityShow(); return false;">Show</a>
<a href="#" onclick="$('.visibility').visibilityHide(); return false;">Hide</a>

<p class="visibility">
	Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus voluptatem cum provident aperiam ad deleniti maiores debitis, tempore quis voluptate adipisci dignissimos. Atque cumque voluptatibus sit architecto tenetur, perferendis aperiam.
</p>
```

## Syntax Highlighter
Xem thêm tại <a href="https://prismjs.com/" rel="noopener noreferrer" target="_blank">prismjs.com</a>

Sử dụng: `<div class="filename">tiêu đề</div>`

Kết quả:
<div class="filename">index.html</div>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Title</title>
    <link rel="stylesheet" href="style.css" />
  </head>

  <body>
    <div>...</div>
  </body>
</html>
```
`~~~terminal`

```terminal
Nội dung...
```

## Sử dụng MathJax
- <a href="http://docs.mathjax.org/en/latest/" rel="noopener noreferrer" target="_blank">Tài liệu tham khảo</a>.
- Ví dụ để hiển thị $ax^{2} + bx + c = 0$ sử dụng:

  ```latex
  $$
  ax^{2} + bx + c = 0
  $$
  ```
