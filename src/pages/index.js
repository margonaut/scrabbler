import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/Image';

const IndexPage = () => (
  <Layout>
    <h1>Do you hate Scrabble?</h1>
    <h2>Boo boop boop</h2>
    <h2>Test 3</h2>
    <p>Welcome to your new Scrabble site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
