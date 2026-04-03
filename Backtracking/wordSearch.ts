// 79. Word Search
// dfs with backtracking
// Given an m x n grid of characters board and a string word, return true if word exists in the grid.
// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring.
// The same letter cell may not be used more than once.

function exist(board: string[][], word: string): boolean {
  // from cell (i,j), we go in all 4 directions to find the next letter of the word
  // k: length of the path ie number of consecutive matching letters
  // visited set: keeps track of cells we already visited for this path
  function dfs(i: number, j: number, k: number, visited: Set<string>) {
    if (board[i][j] !== word[k] || visited.has(`${i}-${j}`)) {
      return false;
    }
    // length of path, ie length of matching letters is equal to word length
    // we found the path that represents the word we're looking for
    if (k === word.length - 1) {
      return true;
    }
    visited.add(`${i}-${j}`);
    // go in all 4 directions to find the next letter ie dfs through all 4 directions
    // top
    if (i !== 0) {
      // If any recursive DFS call returns true, the current DFS call immediately returns true.
      // same for the below ones
      if (dfs(i - 1, j, k + 1, visited)) return true;
    }
    // bottom
    if (i !== board.length - 1) {
      if (dfs(i + 1, j, k + 1, visited)) return true;
    }
    // left
    if (j !== 0) {
      if (dfs(i, j - 1, k + 1, visited)) return true;
    }
    //right
    if (j !== board[0].length - 1) {
      if (dfs(i, j + 1, k + 1, visited)) return true;
    }

    // Backtracking: when a cell fails, we “step back” and unmark the cell so other paths can try it
    // but on this path it's not working
    visited.delete(`${i}-${j}`);
    return false; // return false if tried all directions and hasn't return true yet
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      let visited = new Set<string>();
      // start at every possible starting cell that has the same letter as the first letter of the word
      if (board[i][j] === word[0]) {
        // from that cell, we try to go in all 4 directions to find the next letter
        if (dfs(i, j, 0, visited)) return true;
      }
    }
  }
  return false;
}
// Complexity 
// We visit every cell once as a potential starting point → O(m * n)
// DFS: Each cell can go to 4 directions but only L times where L is the length of the word → O(4^L)
// in reality it's 1 less then L because we start at the first letter of the word so it would be 4^(L-1),
// but we can ignore that constant factor as constants don't matter in Big O notation

const board = [
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"],
  ],
  word = "ABCCED";
exist(board, word); // true
