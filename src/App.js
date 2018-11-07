import React, { Component } from 'react';
import './styles/App.css';
import QuoteBox from './components/quote-box.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuoteBox />
      </div>
    );
  }
}

export default App;
