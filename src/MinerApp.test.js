import React from "react";
import ReactDOM from "react-dom";
import MinerApp from "./MinerApp";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<MinerApp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
