import React from 'react';
import styles from './styles.module.css';

const Card = ({children, title, hasColorBar, sidebar}) => {
  let classNames = styles.container;

  if(hasColorBar) {
    classNames = `${classNames} ${styles.hasColorBar}`;
  }

  if (sidebar) {
    classNames = `${classNames} ${styles.sidebar}`;
  }
  
  return (
    <div className={classNames}>
    <h3 className={styles.title}>{title}</h3>
      {children}
    </div>
  );
};

export default Card;
