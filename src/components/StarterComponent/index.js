import React from 'react';
import styles from './styles.module.css';

const StarterComponent = ({ children}) => {
  return (
    <div className={styles.container}>
      <p>I am your component.</p>
      {children}
    </div>
  );
};

export default StarterComponent;
