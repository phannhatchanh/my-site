---
date: 2019-07-20
title: 'Tổng hợp bài tập Pascal'
template: post
thumbnail: '../../thumbnails/pascal.png'
slug: bai-tap-pascal-tong-hop
tags:
  - Pascal
keywords:
  - Bài tập Pascal
  - Bài tập Pascal tổng hợp
---

## Pascal 8 năm 2018 - 2019
<h2 class="question">Bài 1: Viết chương trình tìm ước chung lớn nhất (UCLN) và bội chung nhỏ nhất (BCNN) của hai số nhập từ bàn phím.</h2>

- Điều kiện:

  - Ước chung lớn nhất là gì? Nếu một số nguyên $a$ bất kỳ chia hết cho số nguyên $c$ được gọi là ước của số nguyên $a$ và $a$ được gọi là bội của $c$. Nếu 2 số dương $a$ và $b$ bất kỳ cùng chia hết cho một số nguyên $c$ lớn nhất thì $c$ được gọi là ước chung lớn nhất của $a$ và $b$. Nếu $a$ và $b$ đều bằng 0 thì chúng không có ước chung.
  
  - Bội chung nhỏ nhất là gì? $c$ được gọi là bội chung nhỏ nhất của $a$ và $b$ khi $c$ là số nguyên nhỏ nhất chia hết cho $a$ và $b$.

$$
UCLN(a,b) = \frac{a*b}{BCNN(a,b)}
$$

- Cách giải:
  - Lấy số lớn hơn trong 2 số đã cho trừ đi nhau. Lặp lại thao tác cho đến khi 2 số bằng nhau thì ngừng => UCLN. Và làm theo công thức trên ta được BCNN.
  - Chương trình:
```pascal
var a,b,UCLN,BCNN:integer;
begin
  write('Nhap vao 2 so a va b');
  readln(a,b);
  BCNN:=a*b;
  While a<>b do 
  If a>b then a:=a-b else b:=b-a;
  UCLN:=a;
  BCNN:=BCNN div UCLN;
  write(UCLN,' ',BCNN);
end.
```

<h2 class="question">Bài 2: Viết chương trình nhập vào một dãy gồm $N$ số nguyên rồi thực hiện các yêu cầu sau:</h2>

1. Cho biết có bao nhiêu số lẽ trong dãy.
2. Tính trung bình cộng của các số lẽ trong dãy đó.

<h2 class="question">Bài 3: Viết chương trình giải bài toán sau:</h2>

> Trăm trâu trăm cỏ<br />
Trâu đứng ăn năm<br />
Trâu nằm ăn ba<br />
Lụ khụ trâu già<br />
Ba con một bó<br />
<abbr class="red">Hỏi mỗi loại mấy con?</abbr>

- Có một trăm con trâu ăn hết một trăm bó cỏ. Mỗi con trâu đứng ăn đưọc 5 bó. Mỗi con trâu nằm ăn được 3 bó và ba con trâu già thì chia nhau chỉ ăn được 1 bó. Hỏi có bao nhiêu con trâu đứng, bao nhiêu con trâu nằm và bao nhiêu con trâu già.
- Phân tích:
  - Trâu đứng ăn 5 => số cỏ ăn là 5 bó => số trâu đứng <=20.
  - Trâu nằm ăn 3 => số cỏ ăn được là 3 bó => số trâu nằm <=33
  - Trâu già = 100 – số trâu đứng – số trâu nằm.
- Chương trình:

```pascal
Program ConTrau;
Uses Crt;
Var i,j,k:byte;
Begin
  Clrscr;
  For i:=1 to 20 do
    For j:=1 to 33 do
      begin
        k:=100-i-j;
        if 5*i+3*j+k/3 = 100 then
          Writeln('Trau dung ',i,' trau nam ',j,' trau gia ',k);
      end;
  Readln
End.
```

<h2 class="question">Bài 4: Cho dãy gồm $N$ số nguyên dương $A=\{a_1, a_2, a_3,..., a_n\}$. Hãy tìm và in ra màn hình số nguyên tố lớn nhất có trong dãy. Nếu trong dãy không có số nguyên tố nào thì in ra màn hình số $0$.</h2>


