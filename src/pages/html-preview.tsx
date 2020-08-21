import * as React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';
import Bio from '../components/Bio';

const htmlPreviewPage = () => (
  <Layout>
  <SEO title="GitHub and BitBucket HTML Preview" />
    <div className="index-wrap">
    <Bio />
      <div className="index-post-list-wrap">
        <div className="blog-post-container">
          <div className="blog-post">
            
            <h1 className="blog-post-title">GitHub and BitBucket HTML Preview</h1>
            <p>Render the html files in public Github repositories</p>
            <form id="previewform">
            <p>Enter URL of the HTML file to preview:<br />
			<input type="url" id="file" value="" placeholder="e.g. https://github.com/user/repo/blob/master/index.html" style={{width:'100%', margin:'0 0 5px 0'}} />
			<input type="submit" value="Preview" />
		    </p>
            </form>
            <p>or prepend to the URL: <code><strong>https://phannhatchanh.com/html-preview/?</strong>https://github.com/twbs/bootstrap/blob/gh-pages/2.3.2/index.html</code></p>
            <p>This page uses the < a href='https://github.com/htmlpreview/htmlpreview.github.com' rel='noopener noreferrer' target='_blank'>source code of htmlpreview</a>. You can display even any website using this tool.</p>
            <script src="http://htmlpreview.github.io/htmlpreview.js"></script>

          </div>
        </div>
      </div>
    </div>
  </Layout>
);

export default htmlPreviewPage;
