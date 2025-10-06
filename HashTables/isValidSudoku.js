var isValidSudoku = function (board) {
  let rows = Array.from({ length: 9 }, () => new Set());
  let cols = Array.from({ length: 9 }, () => new Set());
  let boxes = Array.from({ length: 9 }, () => new Set());

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let val = board[i][j];
      if (val === ".") continue;

      let boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

      // if the row, column or box has the value than sudoku is invalid
      if (rows[i].has(val) || cols[j].has(val) || boxes[boxIndex].has(val)) {
        return false;
      }

      rows[i].add(val);
      cols[j].add(val);
      boxes[boxIndex].add(val);
    }
  }
  return true;
};

/* boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3) explanation

   Sudoku board is 9×9, split into 3×3 boxes
   [0] [1] [2]
   [3] [4] [5]
   [6] [7] [8]
    
   Each cell row i belongs to a block-row:
    i = 0,1,2 → row-block 0
    i = 3,4,5 → row-block 1
    i = 6,7,8 → row-block 2

    Mathematically:
    rowBlock = Math.floor(i / 3)


    Each cell column j belongs to a block-column:
    j = 0,1,2 → col-block 0
    j = 3,4,5 → col-block 1
    j = 6,7,8 → col-block 2

    Mathematically:
    colBlock = Math.floor(j / 3)

    rowBlock can be 0–2, and colBlock can be 0–2.
    Together, they describe a coordinate in the 3×3 grid of boxes.
    We want to convert that coordinate into a single number 0–8.
    This is like flattening a 2D array into 1D:
    boxIndex = rowBlock * 3 + colBlock

*/

// nested for loop solution
var isValidSudoku = function (board) {
  // for each index between 0-8
  // check elements of the row and column
  for (let i = 0; i < 9; i++) {
    let rowMap = new Map();
    let colMap = new Map();
    for (let j = 0; j < 9; j++) {
      if (board[i][j] !== ".") {
        if (rowMap.has(board[i][j])) return false;
        rowMap.set(board[i][j], 1);
      }

      if (board[j][i] !== ".") {
        if (colMap.has(board[j][i])) return false;
        colMap.set(board[j][i], 1);
      }
    }
  }
  // boxRow and boxCol to shift to the next box
  // r is row within the box, c is column within the box
  for (let boxRow = 0; boxRow < 9; boxRow += 3) {
    for (let boxCol = 0; boxCol < 9; boxCol += 3) {
      let squareMap = new Map();
      for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
          let val = board[boxRow + r][boxCol + c];
          if (val === ".") continue;
          if (squareMap.has(val)) return false;
          squareMap.set(val, 1);
        }
      }
    }
  }
  return true;
};
