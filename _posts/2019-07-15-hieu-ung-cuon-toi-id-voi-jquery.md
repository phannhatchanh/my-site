---
date: 2019-07-15
title: 'Hiệu ứng di chuyển đến ID với jQuery'
template: post
thumbnail: '../thumbnails/jquery.png'
tags:
  - Javascript
keywords:
  - jQuery Code Snippets
---
Đây là một đoạn mã jQuery mà tôi thường sử dụng khi tôi cần cuộn đến ID. Chỉ cần thay đổi giá trị `500` (tốc độ tính bằng mili giây) mà bạn muốn trang cuộn xuống.
#### Mã lệnh
<div class="filename">jQuery</div>

```javascript
$('a[href*="#"]').on('click', function(e) {
  e.preventDefault()

  $('html, body').animate(
    {
      scrollTop: $($(this).attr('href')).offset().top,
    },
    500,
    'linear'
  )
})
```

