import React from 'react';
import './App.css';
import Header from './components/Header';
import Personal from './components/Personal';
import Professional from './components/Professional';
import Show from './components/Show';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Personal />
        <Professional />
        <Show />
      </div>
    );
  }
}

export default App;
