import React, { Component } from 'react';
import {Link} from 'react-router';
import './index.css';

export default class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 0, displayTime: (new Date()).toLocaleString()};
  }

  tick() {
    this.setState((prevState) => ({
      displayTime: (new Date()).toLocaleString(),
      secondsElapsed: prevState.secondsElapsed + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="NotFound">
        <h3 className="NotFound-time">
          这位少侠，据我观察 {this.state.secondsElapsed} 秒后你就会离开！
        </h3>
        {this.state.displayTime}
        <p>
          <Link to="/blogs">去这里看看？</Link>
        </p>
      </div>
    );
  }
}