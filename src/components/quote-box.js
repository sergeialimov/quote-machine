import React, { Component } from 'react';
import './../styles/quote-box.css'
import twitterLogo from './../img/twitter-logo.png';

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: this.props.quotes[0].quote,
      author: this.props.quotes[0].author,
    };
    this.getRandom = this.getRandom.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  
  getRandom() {
    return Math.floor(Math.random() * Math.floor(this.props.quotes.length));
  }
  
  onClick(event) {
    const num = this.getRandom();
    this.setState({
      quote: this.props.quotes[num].quote,
      author: this.props.quotes[num].author,
    })
  }
  
  render() {
    const twitUrl = `https://twitter.com/intent/tweet?text=%22${this.state.quote}%22%20${this.state.author}%20%23quotes`;
    return (
      <div id="quote-box">
        <header id="text">
          <p>{this.state.quote}</p>
        </header>
        <p id="author">- {this.state.author}</p>
        <div id="button-group">
          <a id="tweet-quote" href={twitUrl} target="_blank" rel="noopener noreferrer">
            <img src={twitterLogo} width="20" height="20" alt="Tweet it" />
          </a>
          <button id="new-quote" onClick={this.onClick}>New quote</button>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
