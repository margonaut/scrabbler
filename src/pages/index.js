import Image from '../components/Image';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import React from 'react';
import WordSearchContainer from '../components/WordSearchContainer';

const IndexPage = () => (
  <Layout>
    <WordSearchContainer></WordSearchContainer>
    <p>I am content!!!</p>
    <Link to="/search-results" state={{ word: 'bananas' }}>
      A Link With State
    </Link>
    <Link to="/search-results">A Link Without State</Link>
  </Layout>
);

export default IndexPage;
