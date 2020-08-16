---
date: 2019-08-22
title: 'Các kiểu dữ liệu của Pascal'
template: post
toc: true
thumbnail: '../../thumbnails/pascal.png'
slug: cac-kieu-du-lieu-cua-free-pascal
tags:
  - Pascal
keywords:
  - Lý thuyết Pascal
  - Pascal cơ bản
---

## Kiểu Logic
- Từ khóa: `BOOLEAN`

- Miền giá trị: `TRUE` `FALSE`

- Các phép toán: phép so sánh `=` `<` `>` và các phép toán logic `AND` `OR` `XOR` `NOT`

\- Trong Pascal, khi so sánh các giá trị `boolean` ta tuân theo qui tắc: `FALSE < TRUE`

\- Giả sử A và B là hai giá trị kiểu `Boolean`. Kết quả của các phép toán được thể hiện qua bảng dưới đây:

| **A** | **B** | **A <span class="green">AND</span> B** | **A <span class="green">OR</span> B** | **A <span class="green">XOR</span> B** | **<span class="green">NOT</span> A** |
| ----- | ----- | ----------- | ---------- | ----------- | --------- |
| True  | True  | True        | True       | False       | False     |
| True  | False | False       | True       | True        | False     |
| False | TRUE  | False       | True       | True        | True      |
| False | False | False       | False      | False       | True      |

## Kiểu số nguyên
| **Tên kiểu** | **Phạm vi**                      |
| ------------ | ---------------------------------|
| byte         | $0 \rightarrow 2^8 - 1$          |
| shortint     | $-2^7 \rightarrow 2^7 - 1$       |
| integer      | $-2^{15} \rightarrow 2^{15} - 1$ |
| word 0       | $0 \rightarrow 2^{16} - 1$       |
| longint      | $-2^{31} \rightarrow 2^{31} - 1$ |
| int64        | $-2^{63} \rightarrow 2^{63} - 1$ |
| Qword        | $0 \rightarrow 2^{64} - 1$       |
### Các phép toán trên kiểu số nguyên
- Các phép toán số học: 
    - `+` `-` `*` `/` (phép chia cho ra kết quả là số thực).
	- Phép chia lấy phần nguyên: `DIV`  (Ví dụ : `34 DIV 5 = 6`).
	- Phép chia lấy số dư: `MOD` (Ví dụ:  `34 MOD 5 = 4`).

- Các phép toán xử lý bit: 
    - Trên các kiểu `ShortInt`, `Integer`, `Byte`, `Word` có các phép toán: `NOT` `AND` `OR` `XOR`

    | **A** | **B** | **A <span class="green">AND</span> B** | **A <span class="green">OR</span> B** | **A <span class="green">XOR</span> B** | **<span class="green">NOT</span> A** |
    | ----- | ----- | ----------- | ---------- | ----------- | --------- |
    | 1     | 1     | 1           | 1          | 0           | 0         |
    | 1     | 0     | 0           | 1          | 1           | 0         |
    | 0     | 1     | 0           | 1          | 1           | 1         |
    | 0     | 0     | 0           | 0          | 0           | 1         |

    - `SHL` (phép dịch trái): `a SHL n $\Leftrightarrow$ a x $2^n$`
    - `SHR` (phép dịch phải): `a SHR n $\Leftrightarrow$ a DIV $2^n$`

## Kiểu số thực

### Các kiểu số thực

| **Tên kiểu** | **Phạm vi**                                   | **Dung lượng** |
| ------------ | --------------------------------------------- | -------------- |
| Single       | $1.5$ x $10^{-45} \rightarrow 3.4$ x $10^{+38}$     | 4 byte         |
| Real         | $2.9$ x $10^{-39} \rightarrow 1.7$ x $10^{+38}$     | 6 byte         |
| Double       | $5.0$ x $10^{-324} \rightarrow 1.7$ x $10^{+308}$   | 8 byte         |
| Extended     | $3.4$ x $10^{-4932} \rightarrow 1.1$ x $10^{+4932}$ | 10 byte        |

Chú ý: Các kiểu số thực `Single`, `Double` và `Extended` yêu cầu phải sử dụng chung với bộ đồng xử lý số hoặc phải biên dich chương trình với chỉ thị `{$N+}` để liên kết bộ giả lập số.

### Các phép toán trên kiểu số thực:
Gồm các phép toán cơ bản như: `+` `-` `*` `/`. *Chú ý*: Trên kiểu số thực không tồn tại hai phép toán `DIV` và `MOD`

### Các hàm số học sử dụng cho kiểu số nguyên và số thực

<div class="two-columns-list">

- `SQR(x)`		Trả về $x^2$
- `SQRT(x)`		Trả về $\sqrt{x}$ với $(x \ge 0)$
- `ABS(x)`		Trả về $\|x\|$
- `SIN(x)`		Trả về $\sin(x)$ theo `radian`
- `COS(x)`		Trả về $\cos(x)$ theo `radian`
- `ARCTAN(x)`	Trả về $arctang(x)$ theo `radian`
- `LN(x)`		Trả về $\ln(x)$
- `EXP(x)`		Trả về $e^x$
- `TRUNC(x)`	Trả về số nguyên gần với $x$ nhất nhưng bé hơn $x$
- `INT(x)`		Trả về phần nguyên của $x$
- `FRAC(x)`		Trả về phần thập phân của $x$
- `ROUND(x)`	Làm tròn số nguyên $x$
- `PRED(n)`		Trả về giá trị đứng trước $n$
- `SUCC(n)`		Trả về giá trị đứng sau $n$
- `ODD(n)`		Cho giá trị `TRUE` nếu $n$ là số lẻ
- `INC(n)`		Tăng $n$ thêm 1 đơn vị $(n:=n+1)$
- `DEC(n)`		Giảm $n$ đi 1 đơn vị $(n:=n-1)$
</div>

## Kiểu ký tự
- Từ khoá: `CHAR` 
- Kích thước: `1 byte` 
- Để biểu diễn một ký tự, ta có thể sử dụng một trong số các cách sau đây:
    - Đặt ký tự trong cặp dấu nháy đơn. Ví dụ `'A'`, `'0'`
    - Dùng hàm `CHR(n)` (trong đó n là mã `ASCII` của ký tự cần biểu diễn). Ví dụ `CHR(65)` biễu diễn ký tự `'A'`
    - Dùng ký hiệu `#n` (trong đó n là mã `ASCII` của ký tự cần biểu diễn). Ví dụ `#65`
	- Các phép toán: `=` `>` `>=` `<` `<=` `<>`

### Các hàm trên kiểu ký tự
- `UPCASE(ch)` Trả về ký tự in hoa tương ứng với ký tự `ch`. Ví dụ: `UPCASE('a') = 'A'`
- `ORD(ch)` Trả về số thứ tự trong bảng mã ASCII của ký tự `ch`. Ví dụ: `ORD('A')=65`
- `CHR(n)` Trả về ký tự tương ứng trong bảng mã ASCII có số thứ tự là `n`. Ví dụ: `CHR(65)='A'`
- `PRED(ch)` cho ký tự đứng trước ký tự `ch`. Ví dụ: `PRED('B')='A'`
- `SUCC(ch)` cho ký tự đứng sau ký tự `ch`. Ví dụ: `SUCC('A')='B'`

## Khai báo hằng
\- Hằng là một đại lượng có giá trị không thay đổi trong suốt quá trình thực hiện chương trình.

\- Cú pháp:
	`CONST <Tên hằng> = <Giá trị>;` hoặc `CONST <Tên hằng> := <Biểu thức hằng>;`
