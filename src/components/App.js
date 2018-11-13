import React, { Component } from 'react';
import './../styles/app.css';
import QuoteBox from './../containers/quoteBox.jsx';
import quotes from './../quotes.js'
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import { submitNewNum } from './../actions/submitNewNum.js';
import { numReducer } from './../reducers/num.js'

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
