import React, { Component } from "react";

export default class Timer extends Component {
  state = { timer: 0, clockInterval: null };
  constructor() {
    super();
    this.state.clockInterval = setInterval(() => {
      this.setState({ timer: this.state.timer + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.state.clockInterval);
  }

  render() {
    let hours = Math.floor(this.state.timer / 3600) % 24;
    let minutes = Math.floor(this.state.timer / 60) % 60;
    let seconds = this.state.timer % 60;
    if (seconds < 10) seconds = "0" + seconds.toString();
    if (minutes < 10) minutes = "0" + minutes.toString();
    if (hours < 10) hours = "0" + hours.toString();
    return <div className="clock">{hours + ":" + minutes + ":" + seconds}</div>;
  }
}
