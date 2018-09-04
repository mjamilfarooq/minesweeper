import React, { Component } from "react";
import "./MinerApp.css";
import MineField from "./MineField";
import MediaQuery from "./MediaQuery";
class MinerApp extends Component {
  render() {
    return (
      <div>
        <MediaQuery />
        <MineField />
      </div>
    );
  }
}

export default MinerApp;
