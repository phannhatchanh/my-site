import * as React from 'react';
import './newsletter.scss';

const Newsletter = () => (
  <div id="newsletter">
    <form
      action="https://buttondown.email/api/emails/embed-subscribe/phannhatchanh"
      method="post"
      target="popupwindow"
      onSubmit={() => window && window.open('https://buttondown.email/phannhatchanh', 'popupwindow')}
      className="newsletter"
    >
      <div className="title">Newsletter</div>
      <label htmlFor="bd-email">Subscribe to get new posts by email!</label>
      <div className="newsletter-fields">
        <input type="email" name="email" id="bd-email" placeholder="Your email address" />
        <input type="hidden" value="1" name="embed"></input>
        <input type="submit" value="Submit"></input>
      </div>
    </form>
  </div>
);

export default Newsletter;
