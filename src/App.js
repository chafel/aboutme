import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Blog from './Components/Blog';
import NotFound from './Components/NotFound';

import { Router, Route, useRouterHistory } from 'react-router';
import { createHistory } from 'history';

const routes = (
  <Route>
    <Route path="/blogs" component={Blog}/>
    <Route path="*" component={NotFound}/>
  </Route>
);

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React world, I am chaofeis!</h2>
        </div>
        <div className="App-intro">
          {this.props.children}
        </div>
      </div>
    );
  }
}

class Root extends React.Component {
  constructor() {
    super();

    this.appHistory = useRouterHistory(createHistory)({
      basename: '/'
    });
  }

  render() {
    return (
      <Router history={this.appHistory}>
        <Route path="/" component={App}>
          {routes}
        </Route>
      </Router>
    );
  }
}

export default Root;
