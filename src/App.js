import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BlogList from './Components/BlogList';

import { Router, Route, Redirect, useRouterHistory } from 'react-router';
import { createHistory } from 'history';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="logo" className="App-logo"/>
        <span className="App-title">lifelog</span>

        <ul className="links">
          <li className="link"><a href="https://twitter.com/chaofeis">twitter</a></li>
          <li className="link"><a href="https://www.douban.com/people/chafel/">douban</a></li>
          <li className="link"><a href="https://www.instagram.com/sunchaofei/">instagram</a></li>
        </ul>
      </header>
      <div className="App-content">
        <BlogList/>
      </div>
    </div>
  );
}

class Root extends Component {
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
          <Redirect from="*" to="/"/>
        </Route>
      </Router>
    );
  }
}

export default Root;
