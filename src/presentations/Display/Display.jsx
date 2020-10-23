import React from 'react';
import PropTypes from 'prop-types';
import styles from './Display.css';
import ReactJson from 'react-json-view';

function Display({ response }) {
  return (
    <div data-testid="display" id={styles.Display}>
      <ReactJson 
        src={response} 
        displayDataTypes={false} 
        displayObjectSize={false}
        theme={'brewer'} />
    </div>
  );
}

Display.propTypes = {
  response: PropTypes.object
};

export default Display;


