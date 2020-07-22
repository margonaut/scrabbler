import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.css';

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    {/* <i className="material-icons">menu</i>
  <i className="material-icons">search</i>
  <i className="material-icons">check</i>
  <i className="material-icons">check_circle</i>
  <i className="material-icons">check_circle_outline</i> */}
    <h1 className={styles.title}>
      <Link to="/">{siteTitle}</Link>
    </h1>
    <Link to="/" className={styles.menuLink}>
      Word Lists
    </Link>
    <Link to="/" className={styles.menuLink}>
      Dictionary
    </Link>
    <i className={`material-icons ${styles.menuIcon}`}>menu</i>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
