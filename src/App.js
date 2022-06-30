import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { Router, Route, Switch } from 'react-router-dom';
import Detailpage from './Detailpage';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Switch>
            <Route exact path="#/">
              <Home />
            </Route>
            <Route exact path="#/detailpage">
              <Detailpage />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
