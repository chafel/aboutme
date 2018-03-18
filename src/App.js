import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import delay from './Utils/delay';
// import Blog from './Components/Blog';
// import NotFound from './Components/NotFound';
import Resume from './Components/Resume';

import { Router, Route, Redirect, useRouterHistory } from 'react-router';
import { createHistory } from 'history';

const routes = (
  <Route>
    {/*<Route path="/blogs" component={Blog}/>*/}
    <Route path="/resume" component={Resume}/>
    <Redirect from="*" to="/"/>
  </Route>
);

class App extends Component {
  componentDidMount() {
    delay(1).then(() => this.props.router.push('/resume'));
  }

  render() {
    if (!this.props.children) {
      return <h5>Is there anyone you are looking for? I guess so...</h5>
    }

    return (
      <div className="App">
        <div className="App-intro">
        </div>
        {this.props.children}
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
