import './App.css';
import { Route, Switch } from 'react-router';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Clients from './components/Clients';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/login' component={ Login } />
        <Route path='/register' component={ Register } />
        <Route path='/clients' component={ Clients } />
      </Switch>
    </div>
  );
}

export default App;
