import React, { Component } from 'react';
import './../styles/App.css';
import QuoteBox from './Quote-box.js';
import quotes from './../quotes.js'
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import { submitNewNum } from './../actions/index.js';

const numReducer = (state = 0, action) => {
  switch (action.type) {
    case 'NUM':
      return action.num;
    default:
      return state;
  }
};

const store = createStore(numReducer);

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

const mapStateToProps = (state=0) => {
  return {
    num: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNum: (num) => {
      dispatch(submitNewNum(num));
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
