// import React from 'react';
// import PropTypes from 'prop-types';
// import styles from 'Display.css';
import renderjson from 'renderjson';
// // import { * as jsonx } from 'jsonx';
// export default async function Display({ response }) {
//   const json = renderjson(response).then(console.log());
//   console.log(json);
//   return ( 
    
//     <div id={styles.Response}>
//       {`${response.hello}`}
//     </div>

    
//   );
// }

// Display.propTypes = {
//   response: PropTypes.object
// };

import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Display extends Component {
  static propTypes = {
    response: PropTypes.object
  }

  state = {
    json: ''
  }

  ComponentDidMount = async({ response }) => {
    const json = await renderjson(response);
    console.log(json);
    this.setState({ json });
  }

  render() {
    return (
      <div>
        {`${this.props.response} raw json`}
        {`${this.state.json} parsed json`}
      </div>
    );
  }
}


