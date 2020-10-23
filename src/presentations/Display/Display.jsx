import React from 'react';
import PropTypes from 'prop-types';
import styles from './Display.css';
import ReactJson from 'react-json-view';

function Display({ response }) {
  // eslint-disable-next-line max-len
  const display = (Object.keys(response).length) ? JSON.stringify(response) : 'display json response';
  // const html = renderjson;
  return (
    <div>
      <ReactJson 
        src={response} 
        displayDataTypes={false} 
        displayObjectSize={false} />
    </div>
  );
}

Display.propTypes = {
  response: PropTypes.object
};

export default Display;


