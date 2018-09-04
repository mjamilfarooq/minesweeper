import React from "react";
import { connect } from "react-redux";
import Field from "./Field";
import ControlPanel from "./ControlPanel";

const MineFieldInternal = props => {
  const { minefield } = props;
  let count = 0;

  return (
    <div
      style={{ width: props.display.width, display: "flex", flexWrap: "wrap" }}
    >
      <div style={{ margin: "auto" }}>
        <ControlPanel />
      </div>

      <table className="minefield" border="1" style={{ margin: "auto" }}>
        <tbody>
          {minefield.map(row => (
            <tr key={count++}>
              {row.map(field => (
                <td key={field.index}>
                  <Field field={field} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    minefield: state.minefield,
    display: state.display
  };
};

const MineField = connect(mapStateToProps)(MineFieldInternal);

export default MineField;
