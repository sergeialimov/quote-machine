import React, { Component } from 'react';
import './styles/App.css';
import QuoteBox from './components/quote-box.js';
import quotes from './quotes.js'
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';

const NUM = 'NUM';

const updateNum = (num) => {
  return {
    type: NUM,
    num
  }
};

const numReducer = (state = 0, action) => {
  switch (action.type) {
    case NUM:
      return [
        action.num
      ];
    default:
      return state;
  }
};

const store = createStore(numReducer);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
    }
  }
  // componentDidMount () {
  //   const script = document.createElement("script");
  // 
  //   script.src = "https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js";
  //   script.async = true;
  // 
  //   document.body.appendChild(script);
  // }
  
  getNum = (randomNum) => {
    this.setState({
      num: randomNum,
    })
  }
    
  render() {
    const style = {
      "backgroundColor": quotes[this.state.num].color,
      "transition": "background-color 2s",
    }

    return (
      <div className="App" style={ style }>
        <QuoteBox quotes={quotes} getNum={this.getNum}/>
      </div>
    );
  }
}

export default App;
