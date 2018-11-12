import React, { Component } from 'react';
import './styles/App.css';
import QuoteBox from './components/Quote-box.js';
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

const mapStateToProps = (state) => {
  return {
    num: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewNum: (num) => {
      dispatch(updateNum(num));
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App)

class AppWrapper extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    )
  }
}

export default AppWrapper;
