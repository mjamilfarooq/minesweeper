import React from "react";
import Events from "../model/Events";
import { connect } from "react-redux";
import Timer from "./Timer";
import PropTypes from "prop-types";

const ControlPanelComponent = props => {
  const { flagCount, mineCount, onRestartButton, onDoneButton } = props;

  return (
    <table className="controlpanel">
      <tbody>
        <tr>
          <td>
            <button className="restart" onClick={onRestartButton}>
              <img src="./restart.png" alt="R" />
            </button>
          </td>
          <td>
            <button className="restart" onClick={onDoneButton}>
              <img src="./right.png" alt="D" />
            </button>
          </td>
          <td colSpan="5">
            <table>
              <tbody>
                <tr>
                  <td className="scoreboard">
                    <img src="./redflag.jpg" alt="F" />
                  </td>
                  <td className="scoreboard" colSpan="4">
                    {flagCount < 10
                      ? "00" + flagCount
                      : flagCount < 100
                        ? "0" + flagCount
                        : flagCount}
                    {":"}
                    {(mineCount < 10 ? "00" : mineCount < 100 ? "0" : "") +
                      mineCount}
                  </td>
                  <td className="scoreboard">
                    <img src="./mine.jpeg" alt="*" />
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
          <td colSpan="4">
            <Timer key={props.timer} />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

ControlPanelComponent.propTypes = {
  flagCount: PropTypes.number.isRequired,
  mineCount: PropTypes.number.isRequired,
  onRestartButton: PropTypes.func.isRequired,
  onDoneButton: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    flagCount: state.flagCount,
    mineCount: state.mineCount,
    timer: state.timer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRestartButton: () => {
      dispatch({
        type: Events.RESTARTBUTTONCLICK
      });
    },
    onDoneButton: () => {
      dispatch({
        type: Events.DONEBUTTONCLICK
      });
    }
  };
};

const ControlPanel = connect(
  mapStateToProps,
  mapDispatchToProps
)(ControlPanelComponent);

export default ControlPanel;
