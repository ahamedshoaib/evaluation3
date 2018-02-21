import React from 'react';

import AppBar from '../AppBar';
import Library from '../Library';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }

  render() {
    return (
      <div className="app">
        <AppBar />
        <Library />
      </div>
    );
  }
}

export default App;
