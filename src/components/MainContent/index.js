import React from 'react';
import styles from './styles.module.css';

const MainContent = ({ children}) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};

export default MainContent;
