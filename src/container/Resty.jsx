import React, { Component } from 'react';
import Controls from '../presentations/Controls/Controls';
import Display from '../presentations/Display/Display';
import History from '../presentations/History/History';

export default class Resty extends Component {
  state = {
    url: '',
    method: '',
    body: '',
    response: {},
    history: [],
  }

  handleSubmit() {

  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  }


  render() {
    const { 
      url, 
      method, 
      body, 
      response, 
      history 
    } = this.state;
      
    return (
      <div>
        <Controls 
          url={url}
          method={method}
          body={body}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
        <Display 
          response={response}/>
        <History history={history}/>
      </div>
    );
  }
}
