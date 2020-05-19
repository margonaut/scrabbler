import React, { useState, useEffect } from 'react';

import styles from './styles.module.css';

const WordEvaluation = ({ word }) => {
  return (
    <div className={styles.container}>
      <h2>I am the word evaluation component!</h2>
      <p>The word is: {word}</p>
    </div>
  );
};

export default WordEvaluation;
