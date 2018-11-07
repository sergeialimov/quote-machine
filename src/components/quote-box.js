import React, { Component } from 'react';
import './../styles/quote-box.css'

class QuoteBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: this.props.quotes,
      quote: this.props.quotes[0].quote,
      author: this.props.quotes[0].author,
    };
    this.getRandom = this.getRandom.bind(this)
    this.onClick = this.onClick.bind(this)
  }
  
  getRandom() {
    return Math.floor(Math.random() * Math.floor(this.state.quotes.length));
  }
  
  onClick(event) {
    // event.preventDefault();
    const num = this.getRandom();
    this.setState({
      quote: this.props.quotes[num].quote,
      author: this.props.quotes[num].author,
    })
  }
  
  render() {
    return (
      <div className="quote-box">
        <header className="quote">
          <p>{this.state.quote}</p>
        </header>
        <div className="author">
          <p>- {this.state.author}</p>
        </div>
        <button className="new-quote-btn" onClick={this.onClick}>New quote</button>
      </div>
    );
  }
}

export default QuoteBox;
