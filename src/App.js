import React, { Component } from 'react';
import './App.css';

import Buttons from './components/buttons';
import Forms from './components/forms';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Buttons/>
        <Forms/>
      </div>
    );
  }
}

export default App;
