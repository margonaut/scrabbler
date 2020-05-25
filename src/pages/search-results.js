import React, { useEffect } from 'react';

import Card from '../components/Card';
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
      <Card>
        <WordEvaluationDisplay word={word}></WordEvaluationDisplay>
      </Card>
      <Card>
        <p>I am other content</p>
      </Card>
      <Card>
        <p>I am other content</p>
      </Card>
    </Layout>
  );
};

export default withLocation(SearchResults);
