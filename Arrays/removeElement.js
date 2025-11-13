// removes all occurrences of a specific value from array
// and returns the new length of the array after removal.
function removeElement(nums, val) {
  let i = 0;

  for (let j = 0; j < nums.length; j++) {
    // if nums[j] !== val, we copy nums[j] to nums[i]
    // increment i by 1
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
}

const removeElement2 = function (nums, val) {
  let writePointer = 0;
  for (let readPointer = 0; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] !== val) {
      nums[writePointer] = nums[readPointer];
      writePointer++;
    }
  }
  return writePointer;
};

let arrEmpty = [];
let lenEmpty = removeElement(arrEmpty, 3);
console.log("After:", arrEmpty.slice(0, lenEmpty)); //  []
console.log("Length:", lenEmpty); //  0

let arrNoElem = [1, 2, 3, 4];
let lenNoElem = removeElement(arrNoElem, 5);
console.log("After:", arrNoElem.slice(0, lenNoElem));
console.log("Length:", lenNoElem);

let arrOneType = [3, 3, 3, 3];
let lenOneType = removeElement(arrOneType, 3);
console.log("After:", arrOneType.slice(0, lenOneType));
console.log("Length:", lenOneType);

let arrScattered = [1, 2, 3, 4, 2, 2];
let lenScattered = removeElement(arrScattered, 2);
console.log("After:", arrScattered.slice(0, lenScattered)); //  [1, 3, 4]
console.log("Length:", lenScattered); //  3

let arrUnique = [1, 2, 3, 4];
let lenUnique = removeElement(arrUnique, 3);
console.log("After:", arrUnique.slice(0, lenUnique)); //  [1, 2, 4]
console.log("Length:", lenUnique); //  3

let arrNegative = [-1, -2, -3, -4];
let lenNegative = removeElement(arrNegative, -2);
console.log("After:", arrNegative.slice(0, lenNegative)); //  [-1, -3, -4]
console.log("Length:", lenNegative); //  3

let arrZeros = [0, 0, 0, 0];
let lenZeros = removeElement(arrZeros, 0);
console.log("After:", arrZeros.slice(0, lenZeros)); //  []
console.log("Length:", lenZeros); //  0
