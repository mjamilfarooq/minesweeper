import React from "react";
import { connect } from "react-redux";
import FieldContent from "./FieldContent";
import Events from "../model/Events";
import PropTypes from "prop-types";
import FieldData from "../model/Field";

const FieldComponent = props => {
  let { field, onFieldClick, onFieldRightClick } = props;
  let { i, j, show, number, flag } = field;
  return (
    <button
      className="field"
      disabled={show}
      style={{
        cursor: show ? "not-allowed" : "",
        opacity: show ? 0.5 : 1
      }}
      onClick={() => onFieldClick(i, j)}
      onContextMenu={() => onFieldRightClick(i, j)}
    >
      <FieldContent show={show} flag={flag} number={number} />
    </button>
  );
};

FieldComponent.propTypes = {
  field: PropTypes.instanceOf(FieldData).isRequired,
  onFieldClick: PropTypes.func.isRequired,
  onFieldRightClick: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {
    onFieldClick: (i, j) => {
      dispatch({
        type: Events.LEFTBUTTONCLICK,
        rindex: i,
        cindex: j
      });
    },
    onFieldRightClick: (i, j) => {
      dispatch({
        type: Events.RIGHTBUTTONCLICK,
        rindex: i,
        cindex: j
      });
      return false;
    }
  };
};

const Field = connect(
  mapStateToProps,
  mapDispatchToProps
)(FieldComponent);

export default Field;
