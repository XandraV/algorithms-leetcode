function findMaxMin(arr:number[]) {
  let min = arr[0];
  let max = arr[0];

  for (let item of arr) {
    if (item < min) {
      min = item;
    }
    if (item > max) {
      max = item;
    }
  }

  return [max, min];
}

let arrPos = [1, 2, 3, 4, 5];
console.log("Max and Min:", findMaxMin(arrPos)); //  [5, 1]

let arrNeg = [-1, -2, -3, -4];
console.log("Max and Min:", findMaxMin(arrNeg)); //  [-1, -4]

