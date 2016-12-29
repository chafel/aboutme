import React, { Component } from 'react';
import './index.css';

export default class NotFound extends Component {
  constructor(props) {
    super(props);
    this.state = {secondsElapsed: 0};
  }

  tick() {
    this.setState((prevState) => ({
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
        <h3 className="NotFound-time">这位少侠，据我观察 {this.state.secondsElapsed} 秒后你就会离开！</h3>
      </div>
    );
  }
}