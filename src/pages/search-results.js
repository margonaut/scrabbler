import React, { useEffect } from 'react';

import Layout from '../components/Layout';
import WordEvaluationDisplay from '../components/WordEvaluationDisplay';
import WordSearchContainer from '../components/WordSearchContainer';
import _ from 'lodash';
import { navigate } from 'gatsby';
import withLocation from '../components/utility/withLocation';

const SearchResults = ({ search }) => {
  const word = _.get(search, 'query');

  useEffect(() => {
    if (!word) {
      navigate('/');
    }
  }, [search.query]);

  return (
    <Layout>
      <WordSearchContainer></WordSearchContainer>
      <WordEvaluationDisplay word={word}></WordEvaluationDisplay>
    </Layout>
  );
};

export default withLocation(SearchResults);
