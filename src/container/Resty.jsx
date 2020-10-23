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
    // eslint-disable-next-line max-len
    if(this.state.history.includes({ url: this.state.url, method: this.state.method })) {
      this.setState({ response, url: '' });
    } else {
      console.log(this.state.history);
      this.setState(state => ({
        response,
        history: [
          ...state.history,
          { url: state.url, method: state.method }
        ],
        url: '',
      }));
      console.log(this.state.history);

    }
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
