import React, { Component } from 'react';
import './../styles/quote-box.css'

class QuoteBox extends Component {
  
  render() {
    const quote = 'Challenges are what make life interesting and overcoming them is what makes life meaningful.'
    const author = 'Chinese Proverb';
    return (
      <div className="quote-box">
        <header className="quote">
          <p>{quote}</p>
        </header>
        <div className="author">
          <p>{author}</p>
        </div>
      </div>
    );
  }
}

export default QuoteBox;
