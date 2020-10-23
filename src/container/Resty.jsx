import React, { Component } from 'react';
import Controls from '../presentations/Controls/Controls';
import Display from '../presentations/Display/Display';
import History from '../presentations/History/History';
import { fetchUrl } from '../services/fetch-url';
import cleanHistory from '../services/cleanHistory';
import styles from './Resty.css';
import Header from '../components/Header';

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
    // eslint-disable-next-line max-len
    
    const data = await fetchUrl(this.state.url, this.state.method);
    const response = await data.json();
    
    this.setState(state => ({
      response,
      history: [
        ...state.history,
        { url: state.url, method: state.method }
      ],
      url: '',
    }));

    this.setState({ history: cleanHistory(this.state.history) });

    
  }

  handleClick = async(url, method) => {
    const json = await fetchUrl(url, method);
    const response = await json.json();

    this.setState({ response, url: '' });
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
      <>
        <Header />
        <div id={styles.Resty}>
          <div id={styles.containHistoryAndControls}>
            <Controls 
              url={url}
              method={method}
              body={body}
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
            />
            <History 
              history={history}
              onClick={this.handleClick}
            />
          </div>
          <Display 
            response={response}
          />
        </div>
      </>
    );
  }
}
