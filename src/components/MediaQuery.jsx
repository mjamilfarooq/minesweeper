import React, { Component } from "react";
import { connect } from "react-redux";
import Events from "../model/Events";

class MediaQueryComponent extends Component {
  state = {};

  componentDidMount() {
    setInterval(() => {
      const display = {
        height: document.documentElement.clientHeight,
        width: document.documentElement.clientWidth
      };

      if (
        this.props.display.height !== display.height ||
        this.props.display.width !== display.width
      )
        this.props.notifyDisplayChange();
    }, 1000);
  }

  render() {
    return <div />;
  }
}

const mapStateToProps = state => {
  return {
    display: state.display
  };
};

const mapDispatchToProps = dispatch => {
  return {
    notifyDisplayChange: () => {
      dispatch({
        type: Events.DISPLAY_RESOLUTION_CHANGE
      });
    }
  };
};

const MediaQuery = connect(
  mapStateToProps,
  mapDispatchToProps
)(MediaQueryComponent);
export default MediaQuery;
