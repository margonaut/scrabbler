import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/Image';
import WordSearchContainer from '../components/WordSearchContainer';
import WordEvaluationDisplay from '../components/WordEvaluationDisplay';

const IndexPage = () => (
  <Layout>
    <WordSearchContainer></WordSearchContainer>
    <p>I am content!!!</p>
    <Link to="/search-results" state={{ word: 'bananas' }}>
      Link with state
    </Link>
    <p>Woo!</p>
    <Link to="/search-results">Link without state</Link>
  </Layout>
);

export default IndexPage;
