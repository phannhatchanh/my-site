---
date: 2019-08-12
title: 'Bài tập Pascal cơ bản phần 1'
template: post
toc: true
thumbnail: '../../thumbnails/pascal.png'
slug: bai-tap-pascal-co-ban-phan-1
tags:
  - Pascal
keywords:
  - Bài tập Pascal
  - Pascal cơ bản
---

## Xử lý số
### Phần bài tập
<h2 class="question">Bài 1: Viết CT xuất câu thông báo ‘<span class="green">chao cac ban</span>’ ra màn hình.</h2>

<h2 class="question">Bài 2: Lập trình theo thứ tự: chú ý đến khoảng cách các chữ chèn vào.</h2>

```terminal
- Xuất: ‘Ban ten gi?’
- Nhập: <tên của mình>
- Xuất: ‘xin chao ban <tên của mình> đen voi Pascal’.
```

<h2 class="question">Bài 3: Hãy nhập vào bán kính $r$, viết chương trình tính chu vi và diện tích hình tròn có bán kính $r$.</h2>

- Chu vi đường tròn: $Chu vi = 2 \ast \pi \ast r$

- Diện tích hình tròn: $Dien tich = \pi \ast r^2$


<h2 class="question">Bài 4: Hãy nhập vào chiều dài $d$ và chiều rộng $r$, viết chương trình tính chu vi và diện tích hình chữ nhật.</h2>

- Chu vi hình chữ nhật $Chuvi = (dai + rong)*2$

- Diện tích hình chữ nhật $Dientich = dai * rong$

<h2 class="question">Bài 5: Hãy nhập vào chiều cao h và cạnh đáy $a$, viết chương trình tính diện tích hình tam giác.</h2>

$$
dien tich = \frac{canh day * chieu cao}{2}
$$

<h2 class="question">Bài 6: Hãy nhập vào một cạnh $a$, tính chu vi và diện tích hình vuông.</h2>

- $Chu vi = canh * 4$ 
- $Dien tich = canh * canh$

<h2 class="question">Bài 7: Nhập vào 4 số, viết chương trình tính trung bình cộng 4 số đó.</h2>

<h2 class="question">Bài 8: In đão số. Nhập vào hai số $ab$, in ra màn hình ngược lại là $ba$. Ví dụ nhập $15$ thì in ra $51$.</h2>

```terminal
- Thuật toán đảo số:
- Nhập a, b.
- tam:= a;
  a:=b;
  b:=tam;
  Như vậy a bây giờ mang giá trị của b, b mang giá trị của a.
  In kết quả write(a,b);
```

<h2 class="question">Bài 9: Một của hàng bán nước ngọt với giá sỉ là 7000đ/chai nếu mua chẳn chục, giá 7500đ/chai nếu mua lẻ. Nhập vào số chai cần mua và viết chương trình tính tiền cho khách theo giá trên.</h2>

\- Nhập n (số chai cần mua).

\- `Số chai lẻ = n mod 10` và `Số chai chẳn = n div 10`

<h2 class="question">Bài 10: Tách số. Nhập vào một chữ số có ba số, viết chương trình tách ra số hàng trăm hàng chục và hàng đơn vị.</h2>

```terminal
Nhập vào số n = 352
Kết quả: Số 352 có:
                  - So hang don vi la 2
                  - So hang chuc la 5
                  - So hang tram la 3
```

## Cấu trúc rẽ nhánh
### Phần bài tập
<h2 class="question">Bài 11: Nhập vào chiều cao của bạn a và bạn b, in ra màn hình thông báo bạn nào cao hơn.</h2>

```pascal
if a>b then writeln(‘Ban a cao hon’)
   else writeln(‘Ban b cao hon);
```

<h2 class="question">Bài 12: Viết chương trình tính kết quả $\frac{a}{b}$, với $a$ và $b$ được nhập từ bàn phím. Nếu trường hợp $b<0$ thì in thông báo phép chia không thực hiện được.</h2>

<h2 class="question">Bài 13: Nhập vào 3 cạnh $a, b, c$ của một tam giác. Viết chương trình cho biết đây có phải là một tam giác đều không?</h2>

Nếu $a=b$ và $b=c$ và thì là tam giác đều, ngược lại không là tam giác đều.

<h2 class="question">Bài 14: Nhập vào 3 cạnh $a, b, c$ của một tam giác. Viết chương trình cho biết đây có phải là một tam giác cân không?</h2>

Nếu $a=b$ hoặc $b=c$ hoặc $a=c$ và thì là tam giác cân, ngược lại không là tam giác cân.

<h2 class="question">Bài 15: Nhập vào 3 cạnh a,b,c của một tam giác. Viết chương trình cho biết đây có phải là một tam giác vuông không?</h2>

Nếu $a^2 = b^2 + c^2$ hoặc $b^2 = c^2 + a^2$ hoặc $c^2 = a^2 + b^2$ là tam giác vuông.

## Cấu trúc lặp với số lần xác định
### Phần bài tập
<h2 class="question">Bài 16: Nhập vào số nguyên dương n, viết chương trình in ra các số lẻ nhỏ hơn hoặc bằng n.</h2>

```pascal
  - Nhập n;
  - For i:= 1 to n do 
      If i mod 2 = 1 then write(i, ‘  ‘);
```

<h2 class="question">Bài 17: Nhập vào số nguyên dương n, viết chương trình tính tổng các số lẻ nhỏ hơn hoặc bằng n.</h2>

```pascal
- Nhập n;
- TL:= 0;
  for i:= 1 to n do
    If i mod 2 = 1 do TL:= TL +i; (Nếu tính tổng chẳn thì điều kiện: i mod 2 = 0)
- In kết quả (TL).
```

<div class="alert alert-success" role="alert" markdown="1">
Các bài 16 và bài 17 có thể đổi lại là số chẳn…
</div>

<h2 class="question">Bài 18: Nhập vào số nguyên dương n, viết chương trình in ra tất cả các số ước của n.</h2>

```pascal
- Nhập n;
- for i:= 1 to n do
    If n mod i = 0 then write(i, ‘   ‘);
```

<h2 class="question">Bài 19: In bảng cữu chương từ 2 đến 9.</h2>

```pascal
for i:=2 to 9 do
  for j:=1 to 10 do
    Writeln(i, ‘ x ‘, j, ‘ = ’, i*j);
```

<div class="alert alert-success" role="alert" markdown="1">
Ghi chú: có thể sửa đề lại: viết chương trình in ra bảng cửu chương n, với n được nhập từ bàn phím.
</div>

<h2 class="question">Bài 19: Nhập vào số nguyên n, viết chương trình xem số n có phải là số nguyên tố không?</h2>

\- Cách 1: dùng câu lệnh `while … do`
```pascal
- nhập n;
- i:=2;
  while n mod i <>0 do i:= i+1;
  if i=n then writeln(n, ' la so nguyen to')
    else writeln(n, ' khong la so nguyen to');
```
\- Cách 2: dùng câu lệnh `for … to … do`
```pascal
- nhập n;
- dem:=0;
  for i:=2 to n-1 do
    if n mod i = 0 then dem:= dem+1;
      if dem=0 then writeln(n, ' la so nguyen to')
        else writeln(n, ' khong la so nguyen to');
```
\- Cách 3
```pascal
KT:= true;
for i:=2 to n-1 do if (n mod i)= 0 then KT := false;
```

<h2 class="question">Bài 19: Nhập vào số nguyên n, viết chương trình tính n!</h2>

```pascal
n! được biết như sau:
    n!= 1 với n=0.
    n!= 1.2.3…n (tích của n số từ 1 đến n).
    - Nhập n;
    - gt:=1;
      for i:=1 to n do gt:=gt*i;
```

<h2 class="question">Bài 20: Tính tổng của n số tự nhiên đầu tiên, với n là số nguyên dương và được nhập từ bàn phím.</h2>

```pascal
- Nhập n;
- tong:=0;
  For i:=1 to n do tong:=tong+i;
- In kết quả là, tong
```
<h2 class="question">Bài 21: Các bài toán cổ:</h2>

- **Câu a:** Hỏi có bao nhiêu trâu đứng, bao nhiêu trâu nằm và bao nhiêu trâu già?
```terminal
Trăm trâu trăm cỏ
Trâu đứng ăn năm
Trâu nằm ăn ba
Lụ khụ trâu già
Ba con một bó
Trăm con ăn cỏ
Trăm bó no nê.
```
- **Câu b:** Hỏi có bảo nhiêu con chó và bao nhiêu con gà?
```terminal
Vừa gà vừa chó, 
bó lại cho tròn,
ba mươi sáu con, 
một trăm chân chẵn.
```

## Lặp với số lần chưa biết trước
### Phần bài tập
<h2 class="question">Bài 22: Viết chương trình: Cần cộng bao nhiêu số tự nhiên đầu tiên để tổng nhỏ nhất lớn hơn 1000. In ra màn hình số tự nhiên và số tổng đó.</h2>

<p class="note">Ghi chú: Bài này được nâng cao hơn nếu là : Cần cộng bao nhiêu số tự nhiên đầu tiên để tổng nhỏ nhất lớn hơn n, với n được nhập từ bàn phím.</p>

<h2 class="question">Bài 23: Viết chương trình tính tổng T=1/1+1/2+1/3+…+1/100.</h2>

(Làm bằng 2 cách: dùng lệnh `for … to … do …` và `while … do …`)

<p class="note">Ghi chú: bài này cũng có thể sửa lại số 100 là n, với n được nhập từ bàn phím.</p>

<h2 class="question">Bài 24: Viết chương trình để tính trung bình của n số thực $x_1,x_2,x_3,x_4,…,x_n$. Biết các số n và $x_1,x_2,x_3,x_4,…,x_n$ được nhập từ bàn phím.</h2>

## Làm việc với dãy số - Bài tập mảng
### Phần bài tập
<h2 class="question">Bài 25: Viết chương trình nhập dãy số gồm n số nguyên nhập từ bàn phím.</h2>

Thực hiện:

\- In dãy số đã nhập ra màn hình. 

\- In dãy số đó theo thứ tự ngược lại.

\- Phần tử thứ x có giá trị là bao nhiêu? ($x < n$ và được nhập từ bàn phím).

<h2 class="question">Bài 26: Nhập vào n số nguyên dương, viết chương trình tìm số lớn nhất, số nhỏ nhất trong n số đó.</h2>

```pascal
- Nhập n, nhập giá trị từng phần tử.
- max:=a[1];
  for i:=2 to n do
    if max<=a[i] then max:=a[i];
      min:=a[1];
      for i:=2 to n do
        if min>=a[i] then min:=a[i];
- In kết quả, min max.
```

<h2 class="question">Bài 27: Viết chương trình nhập dãy n số và in ra tổng các số chẳn, tổng các số lẽ trong dãy vừa nhập.</h2>

```pascal
- Nhập n, nhập giá trị từng phần tử.
- TC:=0;
  TL:=0;
  for i:=1 to n do
    if a[i] mod 2= 0 then TC:=TC+a[i]
      else TL:=TL+a[i];
- In kết quả, TC, Tl.
```

<h2 class="question">Bài 28: Viết chương trình nhập n số và cho biết số nhỏ nhất trong các số vừa nhập là số thứ mấy.</h2>

```pascal
- Nhập n, nhập giá trị từng phần tử.
- min:=a[1];
  for i:=2 to n do
  if min>=a[i] then
    Begin
    min:=a[i];
    k:=i;
    end;
- In kết quả, số thứ k.
```

<p class="note">Ghi chú: sửa lại đề đối với trường hợp số lớn nhất.</p>

<h2 class="question">Bài 29: Viết chương trình nhập n số, sắp xếp và in ra các số đã nhập theo thứ tự tăng dần và giảm dần.</h2>

- Tăng dần:

```pascal
- Nhập n, nhập giá trị từng phần tử.
- for i:=1 to n-1 do
  for j:=i+1 to n do
    if a[i]>a[j] then
      begin
        tam:=a[i];
        a[i]:=a[j];
        a[j]:=tam;
      end;
- In kết quả, dãy số đã sắp xếp tăng dần: for i:=1 to n do write(a[i],'  ');
```

- Giảm dần: Đối với trường hợp giảm dần thì điều kiện ngược lại `a[i]<a[j];`

<h2 class="question">Bài 30: Viết chương trình nhập điểm trung bình của n bạn trong lớp. sau đó in ra màn hình có bao nhiêu bạn đạt loại giỏi, khá, trung bình, yếu.</h2>

```terminal
Biết: - Loại Giỏi: ĐTB >=8.0
      - Khá: ĐTB>=6.5 và ĐTB<8.0
      - Trung bình: ĐTB < 6.5 và ĐTB >=5.0
      - Loại yếu: ĐTB <5.0
```