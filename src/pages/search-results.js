import React, { useEffect } from 'react';

import Image from '../components/Image';
import Layout from '../components/Layout';
import WordEvaluationDisplay from '../components/WordEvaluationDisplay';
import WordSearchContainer from '../components/WordSearchContainer';
import _ from 'lodash';
import { navigate } from 'gatsby';

class SearchResults extends React.Component {
  componentDidMount() {
    if (!this.currentWord()) {
      navigate('/');
    }
  }

  currentWord() {
    return _.get(this, 'props.location.state.word');
  }

  render() {
    return (
      <Layout>
        <WordSearchContainer></WordSearchContainer>
        <WordEvaluationDisplay
          word={this.currentWord()}
        ></WordEvaluationDisplay>
      </Layout>
    );
  }
}

export default SearchResults;
