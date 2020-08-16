---
date: 2019-07-03
title: 'Các lệnh Git hữu ích'
template: post
thumbnail: '../thumbnails/git.png'
slug: tong-hop-mot-so-lenh-git-thuong-dung
toc: true
tags:
  - Git
keywords:
  - Lệnh Git
  - Contribute Github
---

<div class="alert alert-warning" role="alert" markdown="1">
Ghi chú này được cập nhật thường xuyên mà không cần thông báo!
</div>

## Upload tất cả các tệp lên kho Git
Nếu bạn có một dự án trên máy tính của mình và bạn vừa tạo một kho Git trống trong GitHub, hãy sử dụng các lệnh này để tải mọi thứ lên Git.

```bash
cd your-directory
git init
git remote add origin git@github.com:your-username/your-repo.git
git add .
git commit -am "Message"
git push -u origin master
```
## Download tất cả các tệp từ kho Git
Ngược lại với tùy chọn trên - <u>ví dụ</u>: nếu kho lưu trữ của bạn tồn tại trong GitHub và bạn đang làm việc với nó trong một máy tính cục bộ khác.
```bash
git clone git@github.com:your-username/your-repo.git     #using SSH
git clone https://github.com/your-username/your-repo.git #using HTTPS
```
## Xóa một tệp từ Git cache
Xóa một tập tin lưu trữ
```bash
git rm -r —-cached file.txt
```
## Ghi đè toàn bộ thư mục cục bộ
```bash
git fetch --all
git reset --hard origin/master
```
## Bỏ qua một thư mục
Nếu bạn đã theo dõi một thư mục và sau đó quyết định bỏ qua toàn bộ thư mục, chỉ cần thêm nó vào `.gitignore`. Trước tiên, bạn phải thêm thư mục vào `.gitignore`, sau đó chạy lệnh này:
```bash
git rm -r --cached your-directory
```
## Thêm .gitignore vào kho lưu trữ hiện có
```bash
git rm -r --cached .
git add .
git commit -m "Message"
```
## Đẩy mới một branch lên remote
Nếu bạn đang khởi động cho dự án thì công việc đầu tiên là thêm remote repository, sau đó thực hiện đẩy branch tại local lên remote bằng lệnh sau:
```bash
$ git push --set-upstream [remote] [branch]
```
- `remote` là tên của remote mà bạn đã đặt tại bước thêm remote
- `branch` là branch mà bạn muốn đẩy lên, thường thì ta sẽ chọn branch master

Khi bạn thực hiện lệnh này thì git bash sẽ yêu cầu bạn nhập thông tin `username` và `password`, đây chính là thông tin mà bạn đăng nhập vào remote server. Như trong ví dụ dưới đây mình sẽ nhập thông tin tài khoản github của mình vì server remote mình chọn là github.
```bash
$ git push --set-upstream tai_khoan master
```
Sau khi lệnh này thực hiện thành công thì mọi dữ liệu trên local của bạn sẽ được đẩy lên remote, và trên remote cũng sẽ tạo một branch giống tên branch mà bạn đã thiết lập.
## push or pull
```bash
git push -f origin master
git pull -f origin master
```
## Đẩy commit với lệnh git push
Sau khi thiết lập với lệnh `git push --set-upstream` thì trên remote đã có một branch và toàn bộ mã nguồn, vì vậy các thao tác tiếp theo bạn chỉ cần sử dụng lệnh push bình thường. Mỗi lần push nó sẻ hỏi mật khẩu, tuy nhiên bạn đừng lo lắng quá vì bài tiếp theo mình sẽ hướng dẫn cách lưu mật khẩu để nó bỏ qua bước này.
```bash
$ git push
```
Câu hỏi đặt ra là lệnh này sẽ đẩy lên branch nào? Đương nhiên là nó sẽ đẩy lên branch tương đồng với nhau, nghĩa là nếu ở local bạn đang ở branch `master` thì khi push lên nó sẽ áp cho branch `master` trên remote.

Giả sử bạn tạo mới một branch và checkout sang branch đó tại local, lúc này trên remote sẽ không tồn tại branch này, vậy làm sao để thực hiện thao tác push? Lúc này thay vì sử dụng lệnh push thì bạn sử dụng lệnh sau:
```bash
$ git push --set-upstream <remote> <branch_name>
```
Ví dụ: Tạo mới branch `chanh` và thực hiện đẩy nó lên remote repo.
```bash
$ git push --set-upstream tai_khoan chanh
```

## Đóng góp, sửa một tệp tin (file) trên Github

<h2 class="question">Nếu bạn muốn góp ý, sửa một nội dung nào đó trên Github? Hãy sử dụng cách dưới đây:</h2>

Bạn phải <a href="https://github.com/join" rel="noopener noreferrer" target="_blank">cần có 1 tài khoản Github</a>, hãy <a href="https://github.com/login" rel="noopener noreferrer" target="_blank">đăng nhập</a> sau đó:
  1. Vào ngay trang chỉnh sửa bài viết đó trên Github, ví dụ bài “<a href="https://github.com/jaxx2104/gatsby-starter-bootstrap/blob/master/content/posts/2015-05-01-hello-world/index.md" rel="noopener noreferrer" target="_blank">Hello world</a>”.
  2. Nhấn vào biểu tượng hình cây bút (bên phải nó là biểu tượng hình thùng rác).
  3. Tiến hành sửa theo ý bạn (bạn cũng có thể xóa cái cũ, tác giả sẽ tự biết những thay đổi).
  4. Sau khi xóa hoặc chỉnh sửa xong, bạn xuống mục **Propose file change**, ghi cụ thể cái bạn vừa sửa (khung trên là tên chung - nên ghi ngắn gọn, khung dưới là miêu tả cho chỉnh sửa của bạn - bạn có thể ghi dài)
  5. Sau đó nhấn **Propose file change**, bạn sẽ chuyển sang một trang khác. Tại đây bạn nhấn vào **Create pull request**. Điền thông tin cho pull request đó (hoặc để như mặc định cũng được), sau đó nhấn **Create pull request**.
  6. Chờ tác giả xét duyệt và phản hồi bạn.
<div class="alert alert-success" role="alert" markdown="1">
Hãy tìm <strong>tất cả các lỗi</strong> cần sửa và chỉ tạo <strong>1 pull request duy nhất</strong>! Tránh tình trạng quá nhiều pull request cho cùng 1 bài viết.
</div>
