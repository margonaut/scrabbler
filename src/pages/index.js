import React from 'react';

import Layout from '../components/Layout';
import Image from '../components/Image';
import WordSearchContainer from '../components/WordSearchContainer';

const IndexPage = () => (
  <Layout>
    <WordSearchContainer></WordSearchContainer>
    <p>I am content!!!</p>
  </Layout>
);

export default IndexPage;
