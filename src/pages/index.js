import React from 'react';
import { Link } from 'gatsby';
import Layout from '../components/Layout';
import Image from '../components/Image';
import WordSearchContainer from '../components/WordSearchContainer';

const IndexPage = () => (
  <Layout>
    <WordSearchContainer></WordSearchContainer>
    <p>I am content!!!</p>
    <Link to='/search-results' state={{word:'bananas'}}> Test Text </Link>    
  </Layout>
);

export default IndexPage;
