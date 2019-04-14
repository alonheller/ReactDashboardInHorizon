import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home/Home';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Route path="/home" component={Home} />
      </Router>
    );
  }
}

export default hot(module)(App);
