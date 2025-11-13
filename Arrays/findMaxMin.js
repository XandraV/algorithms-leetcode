function findMaxMin(myArray) {
  let min = myArray[0];
  let max = myArray[0];

  for (let item of myArray) {
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

let arrMixed = [-1, 0, 1];
console.log("Max and Min:", findMaxMin(arrMixed));

let arrSame = [2, 2, 2, 2];
console.log("Max and Min:", findMaxMin(arrSame));

let arrOne = [7];
console.log("Max and Min:", findMaxMin(arrOne));

let arrDec = [1.5, 2.5, 0.5];
console.log("Max and Min:", findMaxMin(arrDec));

let arrZero = [0, 0, 0];
console.log("Max and Min:", findMaxMin(arrZero));
