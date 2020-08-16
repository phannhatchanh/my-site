---
date: 2019-08-30
title: 'Các phép toán cơ bản trên hệ nhị phân'
template: post
thumbnail: '../../thumbnails/writing.png'
slug: cac-phep-toan-co-ban-tren-he-nhi-phan
keywords:
  - Hệ nhị phân
  - Hệ đếm cơ số 2
  - Hệ số thập phân
  - Hệ cơ số 10
  - Cơ sở số học
---

Hệ nhị phân (hay hệ đếm cơ số 2) là một hệ đếm chỉ dùng hai ký tự là 0 và 1 để biểu đạt một giá trị số. Bài này sẽ trình bày về cách thực hiện một số phép toán căn bản: cộng, trừ, nhân, chia trên số nhị phân.

[<i class="fas fa-chevron-right"></i> Cách chuyển đổi hệ thập phân sang nhị phân và ngược lại.](/cach-chuyen-doi-he-thap-phan-sang-he-nhi-phan-va-nguoc-lai/)

## Cộng hai số nhị phân
Để cộng hai đơn vị trong hệ nhị phân thực hiện theo nguyến tắc sau:
<div class="def-box" markdown="1" id="dn1">
  <div class="box-title" markdown="1">
    Qui tắc cộng 2 số nhị phân
  </div>
  <div class="box-content" markdown="1">
    0 + 0 = 0<br />
    0 + 1 = 1<br />
    1 + 0 = 1<br />
    1 + 1 = 0 <span class="red">(nhớ 1)</span>
  </div>
</div>
<u>Ví dụ</u>: Cộng hai số $1000111_2$ và số $11110_2$ 

```terminal
      * * * * * (hình * đánh dấu các cột phải nhớ)
    1 0 0 0 1 1 1   (71)
  +     1 1 1 1 0   (30)
    -------------
  = 1 1 0 0 1 0 1  (101)
```
Bạn có thể kiểm tra lại kết quả bằng cách đổi $1000111_2$ và số $11110_2$ sang số thập phân (Ví dụ sau khi đổi ta được $71 + 30 = 101$)

## Trừ hai số nhị phân
Để trừ 2 số nhị phân, ta thực hiện theo nguyên tắc sau:

<div class="def-box" markdown="1" id="dn1">
  <div class="box-title" markdown="1">
    Qui tắc trừ 2 số nhị phân
  </div>
  <div class="box-content" markdown="1">
    0 − 0 = 0<br />
    0 − 1 = 1 <span class="red">(mượn 1)</span><br />
    1 − 0 = 1<br />
    1 − 1 = 0
  </div>
</div>

```terminal
      * * * * (hình * đánh dấu các cột phải mượn)
  1 1 0 1 1 1 0
  −   1 0 1 1 1
---------------
= 1 0 1 0 1 1 1

          1 1 1 1 (bit mượn)
    1 1 0 1 1 1 0
  -     1 0 1 1 1
  -----------------
  = 1 0 1 0 1 1 1
```
## Nhân hai số nhị phân
Phép tính nhân trong hệ nhị phân cũng tương tự như phương pháp làm trong hệ thập phân. Hai số $A$ và $B$ được nhân với nhau bởi những tích số cục bộ: với mỗi con số ở $B$, tích của nó với số một con số trong $A$ được tính và viết xuống một hàng mới, mỗi hàng mới phải chuyển dịch vị trí sang bên trái, hầu cho con số cuối cùng ở bên phải đứng cùng cột với vị trí của con số ở trong $B$ đang dùng. Tổng của các tích cục bộ này cho ta kết quả tích số cuối cùng.

Vì chỉ có hai con số trong hệ nhị phân, nên chỉ có 2 kết quả khả quan trong tích cục bộ:

Nếu con số trong $B$ là $0$, tích cục bộ sẽ là $0$
Nếu con số trong $B$ là $1$, tích cục bộ sẽ là số ở trong $A$. Ví dụ, hai số nhị phân $1011_2$ và $1010_2$ được nhân với nhau như sau:

```terminal
         1 0 1 1 (A)
    ×    1 0 1 0 (B)
---------------------
         0 0 0 0  ← tương đương với 0 trong B
 +     1 0 1 1    ← tương đương với 1 trong B
 +   0 0 0 0 
 + 1 0 1 1 
---------------------
 = 1 1 0 1 1 1 0
```

## Chia hai số nhị phân

Phép chia nhị phân cũng tương tự như phép chia trong hệ thập phân. Do đó bạn cần nắm vững cách chia trên số thập phân, đồng thời cần nắm vững cách trừ 2 số nhị phân.

```terminal
## Cách chia 2 số thập phân

  159 | 12
- 12  |----
  --  | 13
   39 |
  -36 |
   -- |
    3 |

## Cách chia 2 số thập phân

  10011111 | 1100
-  1100    |------
   ----    | 1101
    1111   |
  - 1100   |
    ----   |
      1111 |
    - 1100 |
      ---- |
        11 |
```

Bài tập: Ta có số bị chia là $11011_2$ (hoặc $27$ trong số thập phân), số chia là $101_2$ (hoặc $5$ trong số thập phân). Kết quả sau khi chia là: $101_2$