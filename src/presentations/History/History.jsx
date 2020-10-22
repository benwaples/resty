import React from 'react';
import PropTypes from 'prop-types';
import Request from './Request/Request';
import styles from './History.css';

function History({ history }) {
  // eslint-disable-next-line max-len
  const previousRequests = history.map(request => <Request method={request.method} url={request.url} key={request.url}/>);

  return (
    <ul id={styles.History}>
      {previousRequests}
    </ul>
  );
}

History.propTypes = {
  history: PropTypes.arrayOf(PropTypes.shape({
    url: PropTypes.string.isRequired,
    method: PropTypes.string.isRequired
  })).isRequired
};

export default History;

