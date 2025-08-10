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

// ------------------------------------
//  Test array with positive numbers
// ------------------------------------
let arrPos = [1, 2, 3, 4, 5];
console.log("Test array with positive numbers:");
console.log("Array:", arrPos); // Should print: [1, 2, 3, 4, 5]
let resultPos = findMaxMin(arrPos);
console.log("Max and Min:", resultPos); // Should print: [5, 1]
console.log("---------------");

// ------------------------------------
//  Test array with negative numbers
// ------------------------------------
let arrNeg = [-1, -2, -3, -4];
console.log("Test array with negative numbers:");
console.log("Array:", arrNeg); // Should print: [-1, -2, -3, -4]
let resultNeg = findMaxMin(arrNeg);
console.log("Max and Min:", resultNeg); // Should print: [-1, -4]
console.log("---------------");

let arrMixed = [-1, 0, 1];
console.log("Test array with both positive and negative numbers:");
console.log("Array:", arrMixed); 
let resultMixed = findMaxMin(arrMixed);
console.log("Max and Min:", resultMixed); 
console.log("---------------");

let arrSame = [2, 2, 2, 2];
console.log("Test array with all same numbers:");
console.log("Array:", arrSame); 
let resultSame = findMaxMin(arrSame);
console.log("Max and Min:", resultSame); 
console.log("---------------");

let arrOne = [7];
console.log("Test array with one number:");
console.log("Array:", arrOne);
let resultOne = findMaxMin(arrOne);
console.log("Max and Min:", resultOne);
console.log("---------------");

let arrDec = [1.5, 2.5, 0.5];
console.log("Test array with decimals:");
console.log("Array:", arrDec); 
let resultDec = findMaxMin(arrDec);
console.log("Max and Min:", resultDec); 
console.log("---------------");


let arrZero = [0, 0, 0];
console.log("Test array with zeros:");
console.log("Array:", arrZero); 
let resultZero = findMaxMin(arrZero);
console.log("Max and Min:", resultZero);
console.log("---------------");
