import React, { Component } from 'react';
import './../styles/quote-box.css'

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: this.props.quotes
    };
    this.getRandom = this.getRandom.bind(this)
  }
  
  getRandom(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
  
  render() {
    console.log(this.state.quotes);
    
    const num = this.getRandom(this.state.quotes.length);
    return (
      <div className="quote-box">
        <header className="quote">
          <p>{this.state.quotes[num].quote}</p>
        </header>
        <div className="author">
          <p>- {this.state.quotes[num].author}</p>
        </div>
        <button className="new-quote-btn">New quote</button>
      </div>
    );
  }
}

export default QuoteBox;
