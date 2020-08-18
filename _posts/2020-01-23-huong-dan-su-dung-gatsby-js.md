---
date: 2020-01-23
title: 'Sử dụng GatsbyJS'
subtitle: ''
toc: true
template: post
thumbnail: '../thumbnails/gatsby.png'
slug: huong-dan-su-dung-gatsby-js
tags:
  - Gatsby
keywords:
  - Cách sử dụng gatsby
  - Gatsby cơ bản
  - Tạo một trang web với gatsby
  - Web tĩnh gatsby
---
<div class="alert alert-warning" role="alert" markdown="1">
Ghi chú này được cập nhật thường xuyên mà không cần thông báo!
</div>

## Cài đặt môi trường trên localhost
Cài đặt <a href="https://www.npmjs.com/" rel="noopener noreferrer" target="_blank">npm</a> và <a href="https://nodejs.org/en/" rel="noopener noreferrer" target="_blank">NodeJS (với npm)</a> . Kiểm tra phiên bản hiện tại: `npm -v` (đối với npm) và `node -v` (đối với nodejs). Sau đó, bạn có thể cài đặt Gatsby:

```bash
# install
npm install --global gatsby-cli
# check version
gatsby -v
# update
npm i -g gatsby-cli
```

Cài đặt trang web mới với lệnh

```bash
gatsby new gatsby-site #Tạo một trang với tên 'gatsby-site'
cd gatsby-site
gatsby develop #Chạy tại địa chỉ http://localhost:8000
```

Bạn có thể xem **GraphiQL** , một IDE trong trình duyệt, để xem dữ liệu của trang web
<a href="http://localhost:8000/___graphql" rel="noopener noreferrer" target="_blank">http://localhost:8000/___GraphQL</a>

## Cập nhật, nâng cấp phiên bản
1. Kiểm tra các phiên bản mới bằng lệnh `npm outdated`
2. Mở `package.json` sửa bản cũ thành thành bản mới. Xem thêm <a href="https://www.gatsbyjs.org/docs/upgrade-gatsby-and-dependencies/" rel="noopener noreferrer" target="_blank">tại đây</a>
3. Chạy lệnh `npm update` để cập nhật.

## Các thành phần từ Gatsby
- Sử dụng <a href="https://www.gatsbyjs.org/docs/gatsby-link/" rel="noopener noreferrer" target="_blank">Link</a> (sử dụng cho liên kết nội bộ thay thế cho thẻ `<a>`). Đối với các liên kết bên ngoài, sử dụng `<a>` như bình thường.
  ```javascript
  import { Link } from 'gatsby'
  <Link to="/">Text<Link/> //Chỉ sử dụng cho liên kết nội bộ
  ```
  Không thể sử dụng `target='_blank'` với `<Link>`
- Sử dụng `className` thay vì `class=` Ví dụ: `className = "abc"` hay `className = "abc xyz"`.
- <div class="filename">Sử dụng CSS</div>
  
  ```css
  <div style={{ color: "#ffff", paddingTop: "10px" }}></div>
  ```

- Ngày trong Gatsby `{new Date().getFullYear()}` hoặc sử dụng <a href="https://momentjs.com/docs/#/displaying/" rel="noopener noreferrer" target="_blank">moment.js</a>
- `Active className` trong `menu` trên trang web với GatsbyJS:
  ```js
  <Link to="/about/" activeClassName="active">About Me</Link>
  <Link to="/contact/" activeClassName="active">Contact</Link>
  ```

## Áp dụng Bootstrap
Bạn có thể cài đặt <a href="https://github.com/jaxx2104/gatsby-starter-bootstrap" rel="noopener noreferrer" target="_blank">Gatsby Bootstrap Starter</a>.

```bash
gatsby new gatstrap https://github.com/jaxx2104/gatsby-starter-bootstrap
```

### Sử dụng plugin
Nếu bạn muốn bắt đầu lại từ đầu thì sao? Cài đặt `react-bootstrap` và `bootstrap`

```bash
npm install react-bootstrap bootstrap --save
# --save to save to package.json
```

<div class="filename">Cập nhật vào gatsby-browser.js</div>

```jsx
import 'bootstrap/dist/css/bootstrap.min.css';
```

## Sử dụng SASS
```jsx
// in /scr/pages/index.js
import Layout from "../layouts/layout"

// in /scr/layouts/layout.js
import "../styles/main.scss"

// in /scr/styles/main.scss
@import "layout";

// in /scr/styles/_layout.scss
// scss codes
```

## Các thành phần khác
### Tạo một bài viết nháp

<div class="alert alert-success" role="alert" markdown="1">
Sử dụng plugin: <a href="https://www.gatsbyjs.org/packages/gatsby-plugin-draft/" rel="noopener noreferrer" target="_blank">gatsby plugin draft</a>
</div>

<div class="filename">Cập nhật gatsby-node.js</div>

```javascript
exports.createSchemaCustomization = ({ actions, schema }) => {
  const { createTypes, createFieldExtension } = actions

  createFieldExtension({
    name: `defaultFalse`,
    extend() {
      return {
        resolve(source, args, context, info) {
          if (source[info.fieldName] == null) {
            return false
          }
          return source[info.fieldName]
        },
      }
    },
  })

  createTypes(`
    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
    }
    type Frontmatter {
      draft: Boolean @defaultFalse
    }
  `)
}
```

<div class="alert alert-success" role="alert" markdown="1">
Xác định nhiều đối tượng lồng nhau trên MarkdownRemark: <a href="https://www.gatsbyjs.org/docs/schema-customization/#nested-types" rel="noopener noreferrer" target="_blank">tại đây</a>
</div>

<div class="filename">Markdown</div>

```YAML
---
title: Tieu de bai viet
date: 2020-01-27
draft: true
---
```

<div class="filename">GraphQL</div>

```GRAPHQL
query {
  allMarkdownRemark(filter: { frontmatter: { draft: { eq: false } } }) {
    nodes {
      frontmatter {
        title
        date
      }
    }
  }
}
```

### Tích hợp MathJax

<div class="alert alert-success" role="alert" markdown="1">
Xem bài: <a href="../huong-dan-kich-hoat-mathjax-trong-gatsbyjs/">Kích hoạt MathJax trong GatsbyJS</a>.
</div>

### Table of Content

<div class="filename">GraphQL</div>

```GRAPHQL
query MyQuery {
  markdownRemark {
    frontmatter {
      title
    }
    tableOfContents(pathToSlugField: "fields.slug") //đường dẫn đầy đủ
    tableOfContents(absolute: false) //đường dẫn tuyệt đối-tương đối
  }
}
```

### Sử dụng file Javascript
1. Tạo một thư mục gốc có tên `static`
2. Tạo một file `script.js` trong thư mục `static`
3. Import vào:
  ```js
  import Helmet from "react-helmet"
  import { withPrefix, Link } from "gatsby"
  ```
  và gọi file trong cặp `<Helmet>`
  ```js
  <Helmet>
      <script src={withPrefix('script.js')} type="text/javascript" />
  </Helmet>
  ```