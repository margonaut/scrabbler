import { Link, navigate } from 'gatsby';
import React, { useState } from 'react';

import _ from 'lodash';
import styles from './styles.module.css';

const WordSearchContainer = () => {
  const [word, setWord] = useState('');

  const handleInputChange = (event) => {
    const word = _.get(event, 'target.value');
    setWord(word);
  };

  const searchLink = () => `/search-results?query=${word}`;

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate(searchLink());
  };

  return (
    <div className={styles.container}>
      <h2>scrabbler</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Word:
          <input onChange={handleInputChange} value={word} />
        </label>
      </form>
      <Link to={searchLink()}>Go</Link>
    </div>
  );
};

export default WordSearchContainer;
