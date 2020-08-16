---
date: 2019-08-12
title: 'Kích hoạt MathJax trong GatsbyJS'
template: post
toc: true
thumbnail: '../thumbnails/gatsby.png'
slug: huong-dan-kich-hoat-mathjax-trong-gatsbyjs
tags:
  - Gatsby
keywords:
  - MatJax Gatsby
  - Gatsby Plugin
---

[MathJax](https://www.mathjax.org/) là một mã nguồn JavaScript mở, dùng để hiển thị các công thức Toán trên các trình duyệt web hiện đại. Xem thêm trên [wikipedia](https://en.wikipedia.org/wiki/MathJax)

MathJax hỗ trợ cho nhiều web platform như Wordpress, MediaWiki, Drupal,... Bài viết này sẽ trình bày cách kích hoạt công thức Toán trong GatsbyJS qua vài thao tác đơn giản.

## Cấu hình gatsby-config.js
\- Đầu tiên bạn sẽ cài đặt plugin `gatsby-remark-mathjax` với dòng lệnh:
```bash
npm install --save gatsby-remark-mathjax
```
\- Tiếp theo, khai báo plugin trong `gatsby-config.js`
```js
// In your gatsby-config.js
plugins: [
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-mathjax`,
      ],
    },
  },
],
```

## Chỉnh html.js
\- Chạy đoạn lệnh dưới để sao chép tệp tin `default-html.js` trong thư mục `.cache` sang thư mục `src/html.js`
```bash
cp .cache/default-html.js src/html.js
```

\- Đây là tệp `html.js` hoàn chỉnh sau khi tạo và chỉnh sửa
<div class="filename">html.js</div>

```js
import React from 'react';
import PropTypes from 'prop-types';

const MathJaxConfig = `
window.MathJax = {
  tex2jax: {
    inlineMath: [['$', '$'] ],
    displayMath: [['$$', '$$'] ],
    processEscapes: true,
    processEnvironments: true,
    skipTags: ['script', 'noscript', 'style', 'textarea', 'pre'],
    TeX: {
      equationNumbers: {autoNumber: 'AMS'},
      extensions: ['AMSmath.js', 'AMSsymbols.js', 'color.js'],
    },
  }
};
`;

export default class HTML extends React.Component {
  render() {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{__html: this.props.body}}
          />
          {this.props.postBodyComponents}
          <script dangerouslySetInnerHTML={{__html: MathJaxConfig}} />
          <script
            defer
            src="https://cdn.bootcss.com/mathjax/2.7.4/latest.js?config=TeX-AMS_SVG"
          />
        </body>
      </html>
    );
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
```

## Chỉnh sửa gatsby-browser.js
\- MathJax sẽ xử lý tất cả các biểu thức toán học khi vị trí thay đổi.
```js
exports.onRouteUpdate = ({location}) => {
  console.log('new pathname', location.pathname);
  if (window.MathJax !== undefined) {
    MathJax.Hub.Queue(['Typeset', MathJax.Hub]);
  }
};
```
\- Như vậy là đã hoàn thành các bước kích hoạt MathJax trên Gatsby. Để kiểm tra kết quả bạn mở markdown và thử gõ một biểu thức toán học nào đó.
$$
f(x) = \int_{-\infty}^\infty \hat f(\xi),e^{2 \pi i \xi x} ,d\xi
$$
