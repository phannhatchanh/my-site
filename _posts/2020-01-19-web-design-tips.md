---
date: 2020-01-19
title: 'Các mẹo khi thiết kế web'
template: post
thumbnail: '../thumbnails/code.png'
slug: web-design-tips
toc: true
keywords:
  - Web Design
  - Các mẹo thiết kế web
---
<div class="alert alert-warning" role="alert" markdown="1">
Bài này được cập nhật thường xuyên mà không cần thông báo!
</div>

## Cách tăng tốc độ tải CSS, JS

```js
<script type='text/javascript'>
//<![CDATA[
//CSS Ready
function loadCSS(e, t, n) { "use strict"; var i = window.document.createElement("link"); var o = t || window.document.getElementsByTagName("script")[0]; i.rel = "stylesheet"; i.href = e; i.media = "only x"; o.parentNode.insertBefore(i, o); setTimeout(function () { i.media = n || "all" }) }
loadCSS("abc.css");
loadCSS("def.css");
//]]>
</script>
```

### Tải không đồng bộ các tài nguyên JavaScript
- Thuộc tính `async` của JavaScript cho phép bạn tải không đồng bộ các tài nguyên JavaScript. Nội dung HTML sẽ được tiếp tục tải mà không cần chờ đợi các tài nguyên JavaScript.
```js
<script async src='/jquery.min.js' type='text/javascript'></script>
```

- Thuộc tinh `defer` của JavaScript cho phép trì hoàn tải các tài nguyên JavaScript cho đến khi nội dung HTML được tải xong. Tài nguyên JavaScript sẽ được tải sau khi toàn bộ HTML được tải xong.
```js
<script defer src='/jquery.min.js' type='text/javascript'></script>
```

## Auto focus thẻ input khi load trang
Chỉ cần thêm `autofocus` vào thẻ `<input>`
```html
<input name="q" class="search" type="search" placeholder="..." autofocus>
```

## Tách một danh sách thành 2 cột
Và làm cho nó thành 1 nếu bạn thu nhỏ màn hình [xem demo](../cac-trang-web-va-ung-dung-web-huu-ich/)

<div class="filename">html</div>

```html
<div class="two-columns-list">
  <ul>
    <li></li>
  </ul>
</div>
```

<div class="filename">css</div>

```css
.two-columns-list{
  -webkit-columns: 384px 2;
  -moz-columns: 384px 2;
  columns: 350px 2;
}
```
## Các công cụ hữu ích khác
- Mario Ranftl - <a href="https://google-webfonts-helper.herokuapp.com/fonts" rel="noopener noreferrer" target="_blank">google-webfonts-helper</a>.

## Một số mẹo khác
- <a href="https://medium.com/clio-calliope/making-google-fonts-faster-aadf3c02a36d" rel="noopener noreferrer" target="_blank">Tăng tốc Google Font</a>.
- SASS - <a href="http://thesassway.com/intermediate/if-for-each-while" rel="noopener noreferrer" target="_blank">If-For-Each-While trong SCSS</a>.