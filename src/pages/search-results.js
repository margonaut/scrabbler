import React, { useEffect } from 'react';

import BodyLayout from '../components/BodyLayout';
import Card from '../components/Card';
import Layout from '../components/Layout';
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';
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
      <BodyLayout>
        <MainContent>
          <Card hasColorBar={true}>
            <WordEvaluationDisplay word={word}></WordEvaluationDisplay>          </Card>
          <Card title={"Woo I am a card"}>
            <p>This is the content</p>
          </Card>
        </MainContent>
        <Sidebar>
          <Card sidebar={true} title={'Sidebar stuff'}>
            <p>This is the content</p>
          </Card>
        </Sidebar>
      </BodyLayout>      
    </Layout>
  );
};

export default withLocation(SearchResults);
