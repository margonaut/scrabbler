import BodyLayout from '../components/BodyLayout';
import Card from '../components/Card';
import Image from '../components/Image';
import Layout from '../components/Layout';
import { Link } from 'gatsby';
import MainContent from '../components/MainContent';
import RandomAd from '../components/RandomAd'
import React from 'react';
import Sidebar from '../components/Sidebar';
import WordSearchContainer from '../components/WordSearchContainer';
import tintinAd from '../images/tintinAd.jpg';

const IndexPage = () => (
  <Layout>
    <WordSearchContainer></WordSearchContainer>
    <BodyLayout>
      <MainContent>
        <Card hasColorBar={true} title={'In a Nutshell'}>
          <p>This is the content</p>
          <p>Here is more content</p>
        </Card>
        <Card title={"Woo I am a card"}>
          <p>This is the content</p>
        </Card>
      </MainContent>
      <Sidebar>
        <Card sidebar={true} title={'Sidebar stuff'}>
          <p>This is the content</p>
        </Card>
        <Card hasColorBar={true} sidebar={true}>
          <RandomAd>
          </RandomAd>
        </Card>
        <Card sidebar={true}>
          <a href="https://us-boutique.tintin.com">
          <img src={tintinAd} alt="tintin ad" width="300" height="300" />
          </a>
        </Card>
      </Sidebar>
    </BodyLayout>
    {/* <Link to="/search-results?query=bananas">A Link With Query</Link>
    <Link to="/search-results">A Link Without a query</Link> */}
  </Layout>
);

export default IndexPage;
