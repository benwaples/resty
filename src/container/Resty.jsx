import React, { Component } from 'react';
import Controls from '../presentations/Controls/Controls';
import Display from '../presentations/Display/Display';
import History from '../presentations/History/History';
import { fetchUrl } from '../services/fetch-url';

export default class Resty extends Component {
  state = {
    url: '',
    method: 'GET',
    body: '',
    response: {},
    history: [],
  }

  handleSubmit = async(event) => {
    event.preventDefault();
  
    const json = await fetchUrl(this.state.url, this.state.method);
    const response = await json.json();
    this.setState({ response });
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
