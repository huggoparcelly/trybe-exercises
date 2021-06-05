import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Clients from './components/Clients';
import Home from './components/Home';
import Login from './components/Login';
import NotFound from './components/NotFound';
import Register from './components/Register';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ Home } />
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route path="/clients" component={ Clients } />
          <Route component={ NotFound } />
        </Switch>
        
      </div>
    );
  }
}

export default App;
