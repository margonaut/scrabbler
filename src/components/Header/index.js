import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import styles from './styles.module.css';

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <i className="material-icons">menu</i>
    <i className="material-icons">search</i>
    <i className="material-icons">check</i>
    <i className="material-icons">check_circle</i>
    <i className="material-icons">check_circle_outline</i>
    <div className={styles.what}>
      <h1 style={{ margin: 0 }}>
        <Link to="/" className={styles.title}>
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
);

Header.propTypes = {
  siteTitle: PropTypes.string,
};

Header.defaultProps = {
  siteTitle: ``,
};

export default Header;
