import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/Image';
import WordSearchContainer from '../components/WordSearchContainer';
import WordEvaluationDisplay from '../components/WordEvaluationDisplay';

const SearchResults = () => {
  console.log(location.state);
  return (
    <Layout>
      <WordSearchContainer></WordSearchContainer>
      <WordEvaluationDisplay></WordEvaluationDisplay>
    </Layout>
  );
};

export default SearchResults;
