import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/Image';
import WordSearchContainer from '../components/WordSearchContainer';

const IndexPage = () => (
  <Layout>
    <WordSearchContainer></WordSearchContainer>
    <h2>This is our site content.</h2>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Link to="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Go to page 2</Link>
  </Layout>
);

export default IndexPage;
