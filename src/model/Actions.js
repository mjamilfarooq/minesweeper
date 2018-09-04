import { exploreAdjacentEmptyMines, setShow, invertFlag } from "./Field";

export const LeftButtonAction = (state, r, c) => {
  let newstate = { ...state };
  let selected = newstate.minefield[r][c];
  if (selected.isMine) {
    newstate.minefield = newstate.minefield.map(row =>
      row.map(ele => setShow(ele))
    );
    alert("Game Over -- Restart");
    return newstate;
  } else if (selected.number === 0) {
    exploreAdjacentEmptyMines(newstate, r, c);
  } else {
    newstate.minefield = newstate.minefield.map(row =>
      row.map(ele => {
        if (ele.i === r && ele.j === c) {
          return setShow(ele);
        } else return ele;
      })
    );
  }
  return newstate;
};

export const RightButtonAction = (state, r, c) => {
  let newstate = { ...state };
  newstate.minefield = newstate.minefield.map(row =>
    row.map(ele => {
      if (ele.i === r && ele.j === c) {
        if (ele.flag) newstate.flagCount--;
        else newstate.flagCount++;
        return invertFlag(ele);
      } else return ele;
    })
  );
  return newstate;
};

export const DoneButtonAction = (state, r, c) => {
  let successCount = 0;
  let newstate = { ...state };
  newstate.minefield = newstate.minefield.map(row =>
    row.map(ele => {
      if (ele.number === -1 && ele.flag === true) {
        successCount++;
      }

      if (!ele.show) return setShow(ele);
      else return ele;
    })
  );
  if (successCount === newstate.mineCount) alert("SUccess!!!");
  else alert("Failure!!");
  return newstate;
};

export const ClockTickAction = state => {
  let newstate = { ...state, timer: state.timer + 1 };
  console.log(newstate.timer);
  return newstate;
};
