import React, { Component } from 'react';
import './../styles/app.css';
import QuoteBox from './../containers/quoteBox.jsx';
import quotes from './../quotes.js'

class App extends Component {
  render() {
    const style = {
      "backgroundColor": quotes[this.props.num].color,
      "transition": "background-color 2s",
    }
    return (
      <div className="App" style={ style }>
        <QuoteBox />
      </div>
    );
  }
}
export default App;
