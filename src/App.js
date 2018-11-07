import React, { Component } from 'react';
import './styles/App.css';
import QuoteBox from './components/quote-box.js';
import quotes from './quotes.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuoteBox quotes={quotes}/>
      </div>
    );
  }
}

export default App;
