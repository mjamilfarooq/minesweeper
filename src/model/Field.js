function FieldData(i, j) {
  this.index = "field(" + i + "," + j + ")";
  this.show = false;
  this.i = i;
  this.j = j;
  this.flag = false;
  if (Math.random() < 0.01) {
    this.number = -1;
    this.isMine = true;
  } else {
    this.number = 0;
    this.isMine = false;
  }
}

export function setShow(field) {
  let clone = Object.assign(new FieldData(field.i, field.j), field);
  clone.show = true;
  return clone;
}

export function invertFlag(field) {
  let clone = Object.assign(new FieldData(field.i, field.j), field);
  clone.flag = !clone.flag;
  return clone;
}

export function generateGameInitialState() {
  let minefield = [];

  const display = {
    height: document.documentElement.clientHeight,
    width: document.documentElement.clientWidth
  };

  const rows = Math.floor((display.height - 50) / 30);
  const cols = Math.floor(display.width / 30);
  let mineCount = 0;

  for (let i = 0; i < rows; i++) {
    let row = [];
    for (let j = 0; j < cols; j++) {
      let field = new FieldData(i, j);
      row.push(field);
      if (field.number === -1) mineCount++;
    }
    minefield.push(row);
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (minefield[i][j].isMine) {
        for (let ii = i - 1; ii <= i + 1; ii++) {
          for (let jj = j - 1; jj <= j + 1; jj++) {
            if (
              jj >= 0 &&
              ii >= 0 &&
              ii < rows &&
              jj < cols &&
              !minefield[ii][jj].isMine
            )
              minefield[ii][jj].number += 1;
          }
        }
      }
    }
  }

  return { display, rows, cols, minefield, mineCount, flagCount: 0, timer: 0 };
}

export function exploreAdjacentEmptyMines(newstate, r, c) {
  let { minefield } = newstate;

  console.log(newstate.rows, newstate.cols);
  if (r < 0 || c < 0 || r === newstate.rows || c === newstate.cols) return;

  if (minefield[r][c].show) return;

  if (minefield[r][c].number === 0) {
    newstate.minefield = newstate.minefield.map(row =>
      row.map(ele => (ele.i === r && ele.j === c ? setShow(ele) : ele))
    );
    exploreAdjacentEmptyMines(newstate, r - 1, c - 1);
    exploreAdjacentEmptyMines(newstate, r - 1, c);
    exploreAdjacentEmptyMines(newstate, r - 1, c + 1);
    exploreAdjacentEmptyMines(newstate, r, c - 1);
    exploreAdjacentEmptyMines(newstate, r, c + 1);
    exploreAdjacentEmptyMines(newstate, r + 1, c - 1);
    exploreAdjacentEmptyMines(newstate, r + 1, c);
    exploreAdjacentEmptyMines(newstate, r + 1, c + 1);
  } else if (minefield[r][c].number > 0) {
    newstate.minefield = newstate.minefield.map(row =>
      row.map(ele => (ele.i === r && ele.j === c ? setShow(ele) : ele))
    );
  }
}

export default FieldData;
