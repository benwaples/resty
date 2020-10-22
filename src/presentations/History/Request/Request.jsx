import React from 'react';
import PropTypes from 'prop-types';
import styles from './Request.css';

function Request({ method, url }) {
  return (
    <li className={styles.Request}>
      <p>{method}</p>
      <p>{url}</p>
    </li>
  );
}

Request.propTypes = {
  method: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Request;

