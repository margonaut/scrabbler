import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/Layout';
import Image from '../components/Image';
import WordSearchContainer from '../components/WordSearchContainer';
import WordEvaluationDisplay from '../components/WordEvaluationDisplay';

const SearchResults = (props) => {
  console.log(props);
  return (
    <Layout>
      <WordSearchContainer></WordSearchContainer>
      <WordEvaluationDisplay word={props.location.state.word}></WordEvaluationDisplay>
    </Layout>
  );
};

export default SearchResults;
