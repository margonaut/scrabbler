import React from 'react';
import styles from './styles.module.css';

const WordEvaluation = (props) => {
  return (
    <div className={styles.container}>
      <h2>I am the word evaluation component!</h2>
      <p>The word is: {props.word}</p>
    </div>
  );
};

export default WordEvaluation;
