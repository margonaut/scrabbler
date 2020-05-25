import { graphql, useStaticQuery } from 'gatsby';

import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.css';

const Card = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
