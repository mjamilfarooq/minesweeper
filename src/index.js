import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import MinerApp from "./components/MinerApp";
import store from "./store";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
  <Provider store={store}>
    <MinerApp />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
