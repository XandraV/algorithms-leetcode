// 419. Battleships in a Board
// Given an m x n matrix board where each cell is a battleship 'X' or empty '.',
// return the number of the battleships on board.
// Battleships can only be placed horizontally or vertically on board.
// In other words, they can only be made of the shape 1 x k (1 row, k columns)
// or k x 1 (k rows, 1 column), where k can be of any size.
// At least one horizontal or vertical cell separates between two battleships
// (i.e., there are no adjacent battleships).

function countBattleships(board: string[][]): number {
  const visited: Set<string> = new Set(); // `${i},${j}`
  const rowNum = board.length;
  const colNum = board[0].length;
  let count = 0;

  function dfs(i: number, j: number) {
    if (visited.has(`${i},${j}`)) {
      return;
    }
    visited.add(`${i},${j}`);

    const directions = [
      [i, j + 1],
      [i, j - 1],
      [i - 1, j],
      [i + 1, j],
    ];

    for (let [nextI, nextJ] of directions) {
      if (
        nextI >= 0 &&
        nextI < rowNum &&
        nextJ >= 0 &&
        nextJ < colNum &&
        board[nextI][nextJ] === "X" &&
        !visited.has(`${nextI},${nextJ}`)
      ) {
        dfs(nextI, nextJ);
      }
    }
  }

  for (let i = 0; i < rowNum; i++) {
    for (let j = 0; j < colNum; j++) {
      if (board[i][j] === "X") {
        if (!visited.has(`${i},${j}`)) {
          dfs(i, j);
          count++;
        }
      }
    }
  }
  return count;
}