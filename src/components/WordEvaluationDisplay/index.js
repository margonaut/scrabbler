import React, { useState, useEffect } from 'react';

import styles from './styles.module.css';

const WordEvaluation = () => {
  const [wordState, setWordState] = useState({ word: null });

  // useEffect(() => {
  //   console.log('Word has changed, re-rendering');
  // }, [wordState]);

  return (
    <div className={styles.container}>
      <h2>I am the word evaluation component!</h2>
      <p>The word is: {wordState.word}</p>
    </div>
  );
};

export default WordEvaluation;
