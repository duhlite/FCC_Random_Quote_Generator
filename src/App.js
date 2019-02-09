import React, { Component } from 'react';
import './App.scss';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      quote: '',
      author: ''
    };
  };

  HandleClick() {
    fetch('https://cors.io/?https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
    .then(results => results.json())
    .then(data => {
      console.log(data);
      this.setState({quote: data.quoteText, author: data.quoteAuthor})
    })
    .catch(error => {
      console.log(error);
    });
  }

  componentDidMount() {
    fetch('https://cors.io/?https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en')
    .then(results => results.json())
    .then(data => {
      console.log(data);
      this.setState({quote: data.quoteText, author: data.quoteAuthor})
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div id="quote-box">
        <p id='text'>
        {this.state.quote}
        </p>
        <p id='author'>
        {this.state.author}
        </p>
        <div className='buttons'>
        <a className='button' href='twitter.com/intent/tweet' id="tweet-quote"><i className='fab fa-twitter-square fa-lg' id='tweet'></i></a>
        <button className='button' onClick={() => this.HandleClick()} id="new-quote">New Quote</button>
        </div>
        </div>
        </header>
      </div>
    );
  }
}

export default App;
