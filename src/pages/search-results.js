import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import Layout from '../components/Layout';
import Image from '../components/Image';
import WordSearchContainer from '../components/WordSearchContainer';
import WordEvaluationDisplay from '../components/WordEvaluationDisplay';

const SearchResults = ({ location }) => {
  useEffect(() => {
    if (!currentWord()) {
      navigate('/');
    }
  });

  const currentWord = () => location.state && location.state.word;

  if (currentWord()) {
    console.log('rendering search results');
    return (
      <Layout>
        <WordSearchContainer word={currentWord()}></WordSearchContainer>
        <WordEvaluationDisplay word={currentWord()}></WordEvaluationDisplay>
      </Layout>
    );
  } else {
    return <></>;
  }
};

// const wordIsPresent = (location) => location.state && location.state.word;

export default SearchResults;

// get from one page to the other
// talk about state
// pass state through the link

// bryn got the the point where he's passing state and displaying it
// but isn't redirecting back to the homepage if we dont have a word
