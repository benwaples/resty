import React from 'react';
import PropTypes from 'prop-types';
import styles from './Request.css';

function Request({ method, url, onClick }) {
  return (
    <li onClick={() => onClick(url, method)}className={styles.Request}>
      <p className={styles.method}>{method}</p>
      <p className={styles.url}>{url}</p>
    </li>
  );
}

Request.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Request;

