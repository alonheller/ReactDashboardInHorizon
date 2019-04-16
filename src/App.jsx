import React, { Component } from 'react';
import Home from './components/Home/Home';
import 'app.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Home />;
  }
}

export default App;
