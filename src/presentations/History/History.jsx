import React from 'react';
import PropTypes from 'prop-types';
import Request from './Request/Request';
import styles from './History.css';



function History({ history, onClick }) {
  

  // eslint-disable-next-line max-len
  const previousRequests = history.map(request => <Request onClick={onClick} method={request.method} url={request.url} key={`${request.url}-${request.method}-${new Date()}`}/>);

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
  })).isRequired,
  onClick: PropTypes.func.isRequired
};

export default History;

