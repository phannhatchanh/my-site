import * as React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Bio from '../components/Bio';

const ContactPage = () => (
  <Layout>
  <SEO title="Liên hệ" description="Get in touch with me via contact form, email address or facebook mesenger." />
    <div className="index-wrap">
    <Bio />
      <div className="index-post-list-wrap">
        <div className="blog-post-container">
          <div className="blog-post">
            
            <h1 className="blog-post-title">Liên hệ</h1>
            <h3>Sử dụng biểu mẫu liên hệ dưới đây để</h3>
            <ul>
              <li>Cho ý kiến, đề xuất kiến nghị của bạn.</li>
              <li>Link download hoặc liên kết bị hỏng.</li>
              <li>Bất kỳ vấn đề gì liên quan đến trang của tôi.</li>
            </ul>
            <form action="/thanks/" method="POST" name="contact" data-netlify-honeypot="full-name" data-netlify="true">
              <div className="honeypot" style={{display:'none'}}>
                <label htmlFor="full-name">Don’t fill out this field if you’re a human.</label>
                <input type="text" id="full-name" name="full-name" />
              </div>
              <label htmlFor="fname">Họ và tên:</label><br />
              <input type="text" placeholder="Tên của bạn" id="fname" name="name" required /><br />
              <label htmlFor="email">Địa chỉ Email:</label><br />
              <input type="email" placeholder="Email của bạn" id="email" name="email" required /><br />
              <label htmlFor="message">Lời nhắn:</label><br />
              <textarea id="message" style={{width:'100%'}} placeholder="Nội dung lời nhắn" name="message" required /><br />
              <button type="submit">Gửi đi</button>
              <input type="hidden" name="form-name" value="contact" />
            </form>
            <h3>Bạn có thể liên hệ với tôi qua:</h3>
            <ul>
              <li>Email của tôi <a href="mailto:hello@phannhatchanh.com">hello@phannhatchanh.com</a> hoặc <a href="mailto:phannhatchanh@gmail.com">phannhatchanh@gmail.com</a></li>
              <li><a href="https://messenger.com/t/phannhatchanh" target="_blank">Mời tôi 1 ly càfe</a>.</li>
            </ul>

          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default ContactPage;
