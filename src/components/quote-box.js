import React, { Component } from 'react';
import './../styles/quote-box.css'

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getRandom = this.getRandom.bind(this)
  }
  
  getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  render() {
    const quotes = [
      {
        quote: 'Challenges are what make life interesting and overcoming them is what makes life meaningful.',
        author: 'Chinese Proverb'
      }
    ]
    const num = this.getRandom(quotes.length);
    return (
      <div className="quote-box">
        <header className="quote">
          <p>{quotes[num].quote}</p>
        </header>
        <div className="author">
          <p>- {quotes[num].author}</p>
        </div>
        <button className="new-quote-btn">New quote</button>
      </div>
    );
  }
}

export default QuoteBox;
