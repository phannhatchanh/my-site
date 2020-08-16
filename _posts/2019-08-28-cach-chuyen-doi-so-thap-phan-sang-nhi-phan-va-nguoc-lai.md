---
date: 2019-08-28
title: 'Chuyển đổi hệ thập phân sang hệ nhị phân và ngược lại'
template: post
thumbnail: '../../thumbnails/writing.png'
slug: cach-chuyen-doi-he-thap-phan-sang-he-nhi-phan-va-nguoc-lai
keywords:
  - Hệ đếm cơ số 2
  - Hệ cơ số 10
  - Cơ sở số học
---

\- Hệ số thập phân (<span class="red">dec</span>imal hay còn gọi là `hệ đếm cơ số 10`) có mười giá trị $(0,1,2,3,4,5,6,7,8,9)$ cho từng trị số.

\- Hệ nhị phân (<span class="red">bin</span>ary hay còn gọi là `hệ đếm cơ số 2`) là một hệ đếm chỉ dùng hai ký tự là $0$ và $1$ để biểu đạt một giá trị số.

## Chuyển hệ thập phân sang hệ nhị phân
Nguyên tắc của phương pháp này là lấy số cần chuyển đổi chia cho $2$ (kết quả chỉ lấy phần nguyên), sau đó tiếp tục lấy kết quả chia cho $2$ (và cũng chỉ lấy phần nguyên), kết quả số nhị phân thu được là tập hợp các số dư của các phép chia (lấy từ phép chia cuối cùng trở lên trên). Để dễ hình dung ta sẽ làm các ví dụ sau:

<u>Ví dụ 1</u>: Chuyển số $30$ sang hệ nhị phân
```terminal
30/2 = 15 (dư 0)
       15/2 = 7 (dư 1)
              7/2 = 3 (dư 1)
                    3/2 = 1 (dư 1)
                          1/2 = 0 (dư 1)
Như vậy, số 30 trong hệ nhị phân sẽ là: 1 1 1 1 0
```
<u>Ví dụ 2</u>: Chuyển số $71$ sang hệ nhị phân
```terminal
71/2 = 35 (dư 1)
       35/2 = 17 (dư 1)
              17/2 = 8 (dư 1)
                     8/2 = 4 (dư 0)
                           4/2 = 2 (dư 0)
                                 2/2 = 1 (dư 0)
                                       1/2 = 0 (dư 1)
Như vậy, số 71 trong hệ nhị phân sẽ là: 1 0 0 0 1 1 1
```
<p class="alert alert-warning">Đối với phần lẻ của số thập phân, số lẻ được nhân với $2$. Phần nguyên của kết quả sẽ là bit nhị phân, phần lẻ của kết quả lại tiếp tục nhân $2$ cho đến khi phần lẻ của kết quả bằng $0$.</p>

<u>Ví dụ 3</u>: Chuyển số $0.625$ sang hệ nhị phân
- $0.625$ x $2 = 1.25$ (lấy số $1$), phần lẻ $0.25$
- $0.25$ x $2 = 0.5$ (lấy số $0$), phần lẻ $0.5$
- $0.5$ x $2 = 1.0$ lấy số $1$, phần lẻ $0$.
- Kết thúc phép chuyển đổi, ta thu được kết quả là <mark>$101_2$</mark> (lấy từ phép nhân đầu tiên đến phép nhân cuối cùng)

<u>Ví dụ 4</u>: Chuyển số $9.625$ sang hệ nhị phân
- Phần nguyên $9$ ta chuyển đổi sang hệ nhị phân là $1001_2$ (`đổi tương tự như ví dụ 1 và ví dụ 2`)
- Phần lẻ $0.625$ đổi sang hệ nhị phân là $1 0 1$
- Vậy số $9.625$ khi đổi sang hệ nhị phân sẽ là <mark>$1001101_2$</mark>

## Chuyển hệ nhị phân sang hệ thập phân
<u>Ví dụ 5</u>: Chuyển đổi số nhị phân $1000111_2$ sang số thập phân.

Ta thấy số $1000111_2$ có tổng cộng $7$ kí tự, chúng ta sẽ đánh số $7$ kí tự này theo vị trí từ phải sang trái và bắt đầu từ $0$ như sau:

| Kí tự nhị phân | 1    | 0    | 0    | 0    | 1    | 1    | 1    |
| -----------    | ---- | ---- | ---- | ---- | ---- | ---- | ---- |
| Vị trí         | 6    | 5    | 4    | 3    | 2    | 1    | 0    |
| Kết quả        | $1$x$2^6$    | $0$x$2^5$    | $0$x$2^4$    | $0$x$2^3$    | $1$x$2^2$    | $1$x$2^1$    | $1$x$2^0$   | 

<span class="green">Số thập phân cần tìm là kết quả tổng của `kí tự nhị phân x 2 lũy thừa vị trí`.</span>

Tức là:  $(1$ x $2^6) + (0$ x $2^5) + (0$ x $2^4) + (0$ x $2^3) + (1$ x $2^2) + (1$ x $2^1) + (1$ x $2^0)$
Vậy ta được kết quả là $64 + 0 + 0 + 0 + 4 + 2 + 1 = 71$

<u>Ví dụ 6</u>: Chuyển đổi số nhị phân $11110_2$ sang số thập phân.

Tương tự như ví dụ 5. Ta có bảng sau:

| Kí tự nhị phân | 1    | 1    | 1    | 1    | 0    |
| -----------    | ---- | ---- | ---- | ---- | ---- |
| Vị trí         | 4    | 3    | 2    | 1    | 0    |
| Kết quả        | $1$x$2^4$    | $1$x$2^3$    | $1$x$2^2$    | $1$x$2^1$    | $0$x$2^0$    |

Ta được:  $(1$ x $2^4) + (1$ x $2^3) + (1$ x $2^2) + (1$ x $2^1) + (0$ x $2^0)$ Vậy ta được kết quả là $16 + 8 + 4 + 2 + 0 = 30$

[<i class="fas fa-chevron-right"></i> Cách cộng, trừ, nhân, chia trên hệ nhị phân.](/cac-phep-toan-co-ban-tren-he-nhi-phan/)