import React, { Component } from 'react';
import './../styles/quote-box.css'
import twitterLogo from './../img/twitter-logo.png';
import quotes from './../quotes.js'

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    };
    this.getRandom = this.getRandom.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  
  getRandom() {
    return Math.floor(Math.random() * Math.floor(this.props.quotes.length));
  }
  
  onClick(event) {
    const randomNum = this.getRandom();
    this.setState({
      num: randomNum,
    })
    this.props.getNum(randomNum);
  }
  
  render() {
    const twitUrl = `https://twitter.com/intent/tweet?text=%22${quotes[this.state.num].quote}%22%20${quotes[this.state.num].author}%20%23quotes`;
    const style = {
      "backgroundColor": quotes[this.state.num].color,
      "transition": "background-color 2s",
    };
    return (
      <div id="quote-box">
        <header id="text">
          <p>{quotes[this.state.num].quote}</p>
        </header>
        <p id="author">- {quotes[this.state.num].author}</p>
        <div id="button-group">
          <a id="tweet-quote" href={twitUrl} target="_blank" rel="noopener noreferrer" style={style}>
            <img src={twitterLogo} width="20" height="20" alt="Tweet it" />
          </a>
          <button id="new-quote" onClick={this.onClick} style={style}>New quote</button>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
