---
date: 2019-08-10
title: 'Định dạng bảng (Table) với CSS'
template: post
toc: true
thumbnail: '../thumbnails/css.png'
slug: dinh-dang-bang-table-voi-css
tags:
  - CSS
keywords:
  - CSS Code Snippets
---

Dưới đây là một số kiểu hiển thị dữ liệu dưới dạng bảng (table) được định dạng bằng css, chỉ cần chọn một trong các kiểu dưới đây, copy mã css và đưa vào dự án của bạn. Với việc sử dụng các đoạn mã CSS dưới đây sẽ làm cho dữ liệu trong bảng trở nên đẹp, dễ nhìn và thu hút người xem hơn!
## Style 1
![dinh dang table bang css, css table, hien thi du lieu duoi dang bang table css](css-table-style-1.gif "CSS Table, hiển thị dữ liệu dưới dạng bảng (Table) bằng CSS")
```css
table[border="1"] {
  border-collapse:collapse;
  font:normal normal 11px Verdana,Arial,Sans-Serif;
  color:#6F0A0A;
}

table[border="1"] tr {
  background:#FFE5E5;
}

table[border="1"] th,
table[border="1"] td {
  vertical-align:top;
  padding:5px 10px;
  border:1px solid #fff;
}

table[border="1"] tr:nth-child(even) {
  background:#f5f5f5;
}

table[border="1"] th {
  background:#A00F0F;
  color:#fff;
  font-weight:bold;
}
```
## Style 2
![dinh dang table bang css, css table, hien thi du lieu duoi dang bang table css](css-table-style-2.gif "CSS Table, hiển thị dữ liệu dưới dạng bảng (Table) bằng CSS")
```css
table[border="1"] {
  border-collapse:collapse;
  font:normal normal 11px Verdana,Arial,Sans-Serif;
  color:#7D0095;
}

table[border="1"] tr {
  background:#D8D8D8;
}

table[border="1"] th,
table[border="1"] td {
  vertical-align:top;
  padding:5px 10px;
  border:1px solid #fff;
}

table[border="1"] tr:nth-child(even) {
  background:#B09CB4;
}

table[border="1"] th {
  background:#9302B0;
  color:#fff;
  font-weight:bold;
}
```
## Style 3
![dinh dang table bang css, css table, hien thi du lieu duoi dang bang table css](css-table-style-3.gif "CSS Table, hiển thị dữ liệu dưới dạng bảng (Table) bằng CSS")
```css
table[border="1"] {
  border-collapse:collapse;
  font:normal normal 11px Trebuchet,"Trebuchet MS",Arial,Sans-Serif;
  color:#3366CC;
}

table[border="1"] tr {
  background:#E1D4C1;
}

table[border="1"] th,
table[border="1"] td {
  vertical-align:top;
  padding:5px 15px;
  border:1px solid #fff;
}

table[border="1"] td:nth-child(odd) {
  background:#F5EDE3;
}

table[border="1"] th {
  background:#104386;
  color:#F89605;
  font-weight:bold;
}
```
## Style 4
![dinh dang table bang css, css table, hien thi du lieu duoi dang bang table css](css-table-style-4.gif "CSS Table, hiển thị dữ liệu dưới dạng bảng (Table) bằng CSS")
```css
table[border="1"] {
  border-collapse:collapse;
  font:normal normal 11px Verdana,Arial,Sans-Serif;
  color:#333;
}

table[border="1"] tr {
  background-color:#fff;
}

table[border="1"] th,
table[border="1"] td {
  vertical-align:top;
  padding:5px 10px;
  border:1px solid #333;
}

table[border="1"] th {
  background-color:#333;
  color:#fff;
  font-weight:bold;
}
```
## Style 5
![dinh dang table bang css, css table, hien thi du lieu duoi dang bang table css](css-table-style-5.gif "CSS Table, hiển thị dữ liệu dưới dạng bảng (Table) bằng CSS")
```css
table[border="1"] {
  border-collapse:collapse;
  font:normal normal 11px Verdana,Arial,Sans-Serif;
  color:#666;
}

table[border="1"] tr {
  background:#fafafa;
}

table[border="1"] th,
table[border="1"] td {
  vertical-align:top;
  padding:5px 10px;
  border:1px solid #fff;
}

table[border="1"] tr:nth-child(even) {
  background:#f5f5f5;
}

table[border="1"] th {
  background:#418AA4;
  color:#fff;
  font-weight:bold;
}
```
## Style 6
![dinh dang table bang css, css table, hien thi du lieu duoi dang bang table css](css-table-style-6.gif "CSS Table, hiển thị dữ liệu dưới dạng bảng (Table) bằng CSS")
```css
table[border="1"] {
  border-collapse:collapse;
  font:normal normal 11px Verdana,Arial,Sans-Serif;
  color:#333;
}

table[border="1"] tr {
  background-color:#fff;
}

table[border="1"] th,
table[border="1"] td {
  vertical-align:top;
  padding:5px 10px;
  border:1px solid #333;
}

table[border="1"] th {
  background-color:#ccc;
  color:black;
  font-weight:bold;
}
```
## Style 7
![dinh dang table bang css, css table, hien thi du lieu duoi dang bang table css](css-table-style-7.gif "CSS Table, hiển thị dữ liệu dưới dạng bảng (Table) bằng CSS")
```css
table[border="1"] {
  border-collapse:collapse;
  font:normal normal 11px Verdana,Arial,Sans-Serif;
  color:#666;
  -webkit-box-shadow:0 1px 3px rgba(0,0,0,.5);
  -moz-box-shadow:0 1px 3px rgba(0,0,0,.5);
  box-shadow:0 1px 3px rgba(0,0,0,.5);
}

table[border="1"] tr {
  background-color:#fafafa;
}

table[border="1"] th,
table[border="1"] td {
  vertical-align:top;
  padding:5px 10px;
  border:1px solid white;
}

table[border="1"] tr:nth-child(even) {
  background-color:#f5f5f5;
}

table[border="1"] th {
  background-color:#ECE9D8;
  color:#ACA899;
  font-weight:bold;
}
```
## Style 8
![dinh dang table bang css, css table, hien thi du lieu duoi dang bang table css](css-table-style-8.gif "CSS Table, hiển thị dữ liệu dưới dạng bảng (Table) bằng CSS")
```css
table[border="1"] {
  border-collapse:collapse;
  font:normal normal 11px Arial,Sans-Serif;
  color:#ccc;
  -webkit-box-shadow:0 1px 3px black;
  -moz-box-shadow:0 1px 3px black;
  box-shadow:0 1px 3px black;
}

table[border="1"] tr {
  background-color:#222;
}

table[border="1"] th,
table[border="1"] td {
  vertical-align:top;
  padding:5px 10px;
  border:1px solid #3c3c3c;
}

table[border="1"] td:nth-child(even) {
  background-color:#1c1c1c;
}

table[border="1"] th {
  background-color:#555;
  filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#666',endColorstr='#555');
  background-image:-webkit-gradient(linear,left top,left bottom,from(#666),to(#555));
  background-image:-webkit-linear-gradient(top,#666,#555);
  background-image:-moz-linear-gradient(top,#666,#555);
  background-image:-ms-linear-gradient(top,#666,#555);
  background-image:-o-linear-gradient(top,#666,#555);
  background-image:linear-gradient(top,#666,#555);
  color:black;
  font-size:12px;
  text-shadow:0 1px 0 rgba(255,255,255,.4);
  font-weight:bold;
}
```
