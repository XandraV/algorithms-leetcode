const m = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function rotateMatrix(matrix: number[][]): void {
  const n = matrix.length;

  for (let layer = 0; layer < Math.floor(n / 2); layer++) {
    const first = layer; // rowIdx start form left
    const last = n - 1 - layer; // last rowIdx from right

    for (let i = first; i < last; i++) { // iterate over elements in the layer
      const offset = i - first;

      const top = matrix[first][i];

      // left → top
      matrix[first][i] = matrix[last - offset][first];

      // bottom → left
      matrix[last - offset][first] = matrix[last][last - offset];

      // right → bottom
      matrix[last][last - offset] = matrix[i][last];

      // top → right
      matrix[i][last] = top;
    }
  }
}

rotateMatrix(m);
console.log(m);
// [ [ 7, 4, 1],  [ 8, 5, 2],  [ 9, 6, 3]  ]
