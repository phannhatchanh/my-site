---
date: 2019-10-28
title: 'Javascript Tips'
template: post
toc: true
thumbnail: '../thumbnails/js.png'
slug: javascript-tips
tags:
  - Javascript
keywords:
  - JavaScript Tips
  - Code Snippets
---

<div class="alert alert-success" role="alert" markdown="1">
Ghi chú này được cập nhật thường xuyên mà không cần thông báo!
</div>

## Tự động tải lại trang nếu tập tin JS thay đổi
1. Cài đặt <a href="https://nodejs.org/en/download/" rel="noopener noreferrer" target="_blank">nodejs</a> .
2. Cài đặt <a href="https://github.com/tapio/live-server" rel="noopener noreferrer" target="_blank">máy chủ trực tiếp</a> bằng cách sử dụng nodejs : `npm install -g live-server`
3. `cd` vào thư mục dự án.
4. chạy `live-server` (chấp nhận tất cả các thông báo mạng)
5. Duyệt: <a href="http://127.0.0.1:8080" rel="noopener noreferrer" target="_blank">http://127.0.0.1:8080</a> và thưởng thức!

## Thêm MathJax vào trang web
Chỉ cần thêm mã dưới đây trước thẻ `<head>`

<div class="filename">Javascript</div>

```javascript
<script type="text/javascript">
  // SETTINGS
  window.MathJax = {
    jax: ["input/TeX", "output/SVG"],
    tex2jax: {inlineMath: [['$','$'], ['\\(','\\)']]},
    SVG: {
      linebreaks: { automatic: true },
      styles: {".MathJax_SVG_Display": {margin: "0.5rem 0", overflow: "auto"}},
      scale: 90
    }
  };
</script>

<script type="text/javascript" async
  src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-MML-AM_SVG">
</script>
```

## Nút quay lại đầu trang
Để thêm nút **Back to top** vào trang web của bạn: Đặt mã javascript và css đây trong thẻ `<head>...</head>` và html trong `<body>...</body>`

<div class="filename">Javascript</div>

```javascript
$(window).load(function(){
  if ($('#back-to-top').length) {
      var scrollTrigger = 100, // px
          backToTop = function () {
              var scrollTop = $(window).scrollTop();
              if (scrollTop > scrollTrigger) {
                  $('#back-to-top').addClass('show');
              } else {
                  $('#back-to-top').removeClass('show');
              }
          };
      backToTop();
      $(window).on('scroll', function () {
          backToTop();
      });
      $('#back-to-top').on('click', function (e) {
          e.preventDefault();
          $('html,body').animate({
              scrollTop: 0
          }, 700);
      });
  }
});
```

<div class="filename">CSS</div>

```css
#back-to-top {
  position: fixed;
  bottom: 40px;
  right: 40px;
  z-index: 9999;
  width: 32px;
  height: 32px;
  text-align: center;
  line-height: 30px;
  background: #bbb url(../images/arrow-up.svg) no-repeat center 50%;
  color: #444;
  cursor: pointer;
  border: 0;
  border-radius: 2px;
  text-decoration: none;
  transition: opacity 0.2s ease-out;
  opacity: 0;
  border-radius: 40px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  &:hover {
    background: #e9ebec url(../images/arrow-up.svg) no-repeat center 50%;
  }
  &.show {
    opacity: 1;
  }
}
```

<div class="filename">HTML</div>

```html
<a href="#" id="back-to-top"></a>
```