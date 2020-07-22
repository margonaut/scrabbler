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
    <div className={styles.wordSearchArea}>
      <div className={styles.container}>
        <h2 className={styles.title}>Word Checker</h2>
        <p className={styles.subtitle}>Enter a Word Up to 15 Letters Long</p>
        <form onSubmit={handleSubmit}>
          <input
            placeholder={'Check my word'}
            onChange={handleInputChange}
            value={word}
          />
          <Link className={styles.submitButton} to={searchLink()}>
            <i className="material-icons">search</i>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default WordSearchContainer;
