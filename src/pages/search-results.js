import React, { useEffect } from 'react';

import Image from '../components/Image';
import Layout from '../components/Layout';
import WordEvaluationDisplay from '../components/WordEvaluationDisplay';
import WordSearchContainer from '../components/WordSearchContainer';
import { navigate } from 'gatsby';

const SearchResults = (props) => {
  useEffect(() => {
    if (!currentWord()) {
      navigate('/');
    }
  });

  const currentWord = () => location.state && location.state.word;

  if (currentWord()) {
    return (
      <Layout>
        <WordSearchContainer></WordSearchContainer>
        <WordEvaluationDisplay
          word={props.location.state.word}
        ></WordEvaluationDisplay>
      </Layout>
    );
  } else {
    return <></>;
  }
};

export default SearchResults;
