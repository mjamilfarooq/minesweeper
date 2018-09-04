import { createStore } from "redux";
import { generateGameInitialState } from "../model/Field";
import {
  LeftButtonAction,
  RightButtonAction,
  DoneButtonAction,
  ClockTickAction
} from "../model/Actions";
import Events from "../model/Events";

const initialState = generateGameInitialState();

const reducer = (state = initialState, action) => {
  const r = action.rindex;
  const c = action.cindex;

  switch (action.type) {
    case Events.LEFTBUTTONCLICK:
      return LeftButtonAction(state, r, c);
    case Events.RIGHTBUTTONCLICK:
      return RightButtonAction(state, r, c);
    case Events.RESTARTBUTTONCLICK:
    case Events.DISPLAY_RESOLUTION_CHANGE:
      let newstate = generateGameInitialState();
      Object.assign(newstate, { timer: state.timer + 1 });
      return newstate;
    case Events.DONEBUTTONCLICK:
      return DoneButtonAction(state, r, c);
    case Events.CLOCK_TICK:
      return ClockTickAction(state);
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
