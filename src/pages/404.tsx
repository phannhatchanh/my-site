import * as React from 'react';

import Layout from '../components/Layout';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <div
      id="notFound"
      style={{
        maxWidth: '720px',
        padding: '1rem',
        margin: '0 auto',
        marginTop: '3rem',
        textAlign: 'center',
        userSelect: 'none',
      }}
    >
      <h1 style={{ fontSize: '2rem', margin: '0.5rem 0 1rem 0' }}>error 404: Not Found</h1>
      <img src="/404.png" alt='404: Not found' />
      <p>{`That page doesn't exist or is unavailable.`}</p>
    </div>
  </Layout>
);

export default NotFoundPage;
