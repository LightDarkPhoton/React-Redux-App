import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Quote } from './components/Quote'
import { connect } from 'react-redux';


import { getQuote } from './actions/index'

function App(props) {
  return (
    <div className="App">
    {/* <Quote/> */}
    <p>{props.quote}</p>
    <button onClick = {props.getQuote}>Click here</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return (
    {
      quote: state.quote,
      loading: state.loading
    }
  )
}

//export default App;

export default connect(mapStateToProps, {getQuote})(App)
