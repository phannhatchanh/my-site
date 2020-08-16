---
date: 2020-04-14
title: 'Tạo trang 404 trong Codeigniter'
template: post
thumbnail: '../thumbnails/php.png'
slug: huong-dan-tao-trang-404-trong-codeigniter-framework
toc: true
tags:
  - PHP
keywords:
  - PHP
---

Trang báo lỗi 404 trong codeigniter sẽ xuất hiện khi người dùng đi tới các liên kết bị hỏng, đã bị xóa.

## Routes
- Mở tệp tin **routes.php** tại đường dẫn **application/config/route.php**
- Sửa thành `$route['404_override'] = 'Custom404';`
<div class="alert alert-warning" role="alert" markdown="1">
Ở đây, <strong>Custom404</strong> là tên của tệp trong <strong>controller</strong>.
</div>

## Controller
- Tạo một tệp **Custom404.php** trong đường dẫn `application/controllers/` và thêm đoạn mã dưới đây:

```php
<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Custom404 extends CI_Controller {

  public function __construct() {

    parent::__construct();

    // load base_url
    $this->load->helper('url');
  }

  public function index(){
 
    $this->output->set_status_header('404'); 
    $this->load->view('error404');
 
  }

}
```

## View
Tạo một tệp **error404.php** trong đường dẫn `application/views/` và thêm nội dung thông báo lỗi 404. Ví dụ:

```html
<!doctype html>
<html>
 <head>
   <title>404 Page Not Found</title>
   <style>
   body{
     width: 99%;
     height: 100%;
     background-color: mediumturquoise;
     color: white;
     font-family: sans-serif;
   }
   div {
     position: absolute;
     width: 400px;
     height: 300px;
     z-index: 15;
     top: 45%;
     left: 50%;
     margin: -100px 0 0 -200px;
     text-align: center;
   }
   h1,h2{
     text-align: center;
   }
   h1{
     font-size: 60px;
     margin-bottom: 10px;
     border-bottom: 1px solid white;
     padding-bottom: 10px;
   }
   h2{
     margin-bottom: 40px;
   }
   a{
     margin-top:10px;
     text-decoration: none;
     padding: 10px 25px;
     background-color: ghostwhite;
     color: black;
     margin-top: 20px;
   }
   </style>
 </head>
 <body>
   <div>
     <h1>404</h1>
     <h2>Page not found</h2>
     <a href='<?= base_url(); ?>' >Back to Homepage</a>
   </div>
 </body>
</html>
```
## Kết quả
Khi bạn truy cập vào một địa chỉ không có sẵn hệ thống sẽ hiển thị trang báo lỗi tương tự như hình dưới đây
![Hướng dẫn tạo trang báo lỗi 404 trong codeigniter framework](tao-trang-bao-loi-404-trong-codeigniter-framework.gif "Hướng dẫn tạo trang báo lỗi 404 trong codeigniter framework")
