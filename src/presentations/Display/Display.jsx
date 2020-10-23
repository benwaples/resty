import React from 'react';
import PropTypes from 'prop-types';
import styles from './Display.css';
import renderjson from 'renderjson';
import HtmlToReactParser from 'html-to-react';

function Display({ response }) {
  // eslint-disable-next-line max-len
  const display = (Object.keys(response).length) ? JSON.stringify(response) : 'display json response';
  // const html = renderjson;
  return (
    <div>
      {`${display}`}
    </div>
  );
}

Display.propTypes = {
  response: PropTypes.object
};

export default Display;


