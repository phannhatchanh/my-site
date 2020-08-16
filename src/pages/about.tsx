import * as React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Bio from '../components/Bio';

const AboutPage = () => (
  <Layout>
  <SEO title="Giới thiệu" />
    <div className="index-wrap">
    <Bio />
      <div className="index-post-list-wrap">
        <div className="blog-post-container">
          <div className="blog-post">
            
            <h1 className="blog-post-title">Giới thiệu</h1>
            <p>Chào bạn! Tôi tên là Chánh một người đam mê máy tính và thế giới web, tôi hâm mộ Google, Facebook cũng như mọi website mang lại lợi ích và kết nối mọi người.</p>
            <p>Tôi bắt đầu trang web này như một nơi để ghi lại tất cả những gì tôi học theo cách dễ tiếp cận và trực quan nhất bởi vì tôi đồng ý với câu nói "Nếu bạn không thể giải thích điều nào đó một cách đơn giản, có nghĩa bạn không hiểu rõ về nó."</p>
            <h3>Câu nói yêu thích</h3>
            <blockquote>“<i>If you can't explain it simply, you don't understand it well enough.</i>” — Einstein</blockquote>
            <blockquote>“<i>Don’t just download the latest app, help redesign it. Don’t just play on your phone, program it.</i>” — Obama</blockquote>
          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default AboutPage;
