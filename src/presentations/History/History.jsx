import React from 'react';
import PropTypes from 'prop-types';
import Request from './Request/Request';
import styles from './History.css';

function History({ history, onClick }) {
  // remove duplicates
  const asString = history.map(request => `${request.method}-${request.url}`);
  const uni = [...new Set(asString)];
  const reconstruct = uni.map(request => {
    const split = request.split('-');
    return {
      url: split[1],
      method: split[0]
    };
  });

  // eslint-disable-next-line max-len
  const previousRequests = reconstruct.map(request => <Request onClick={onClick} method={request.method} url={request.url} key={`${request.url}-${request.method}`}/>);

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

