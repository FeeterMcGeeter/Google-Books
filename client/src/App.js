import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './components/pages/Search';
import Saved from './components/pages/Saved';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
          <Switch>
            <Route exact path='/' component={Search} />
            <Route exact path='/books' component={Search} />
            <Route exact path='/saved' component={Saved} />
          </Switch>
      </Router>
    )
  }
};

export default App;
