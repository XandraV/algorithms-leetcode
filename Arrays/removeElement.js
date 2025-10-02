// removes all occurrences of a specific value from array
//  and returns the new length of the array after removal.
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

const removeElement2 = function(nums, val) {
    let writePointer = 0;
    for(let readPointer = 0; readPointer < nums.length ; readPointer++){
        if(nums[readPointer] !== val){
            nums[writePointer] = nums[readPointer];
            writePointer++;
        }
    }
    return writePointer;
};

let arrEmpty = [];
console.log("Test empty array:");
console.log("Before:", arrEmpty); // Should print: []
let lenEmpty = removeElement(arrEmpty, 3);
console.log("After:", arrEmpty.slice(0, lenEmpty)); // Should print: []
console.log("Length:", lenEmpty); // Should print: 0
console.log("---------------");


let arrNoElem = [1, 2, 3, 4];
console.log("Test array without the element to remove:");
console.log("Before:", arrNoElem); 
let lenNoElem = removeElement(arrNoElem, 5);
console.log("After:", arrNoElem.slice(0, lenNoElem)); 
console.log("Length:", lenNoElem); 
console.log("---------------");


let arrOneType = [3, 3, 3, 3];
console.log("Test array with one type of element to remove:");
console.log("Before:", arrOneType); 
let lenOneType = removeElement(arrOneType, 3);
console.log("After:", arrOneType.slice(0, lenOneType));
console.log("Length:", lenOneType); 
console.log("---------------");

// ------------------------------------
//  Test array with the element to remove scattered
// ------------------------------------
let arrScattered = [1, 2, 3, 4, 2, 2];
console.log("Test array with the element to remove scattered:");
console.log("Before:", arrScattered); // Should print: [1, 2, 3, 4, 2, 2]
let lenScattered = removeElement(arrScattered, 2);
console.log("After:", arrScattered.slice(0, lenScattered)); // Should print: [1, 3, 4]
console.log("Length:", lenScattered); // Should print: 3
console.log("---------------");

// ------------------------------------
//  Test array with all unique elements
// ------------------------------------
let arrUnique = [1, 2, 3, 4];
console.log("Test array with all unique elements:");
console.log("Before:", arrUnique); // Should print: [1, 2, 3, 4]
let lenUnique = removeElement(arrUnique, 3);
console.log("After:", arrUnique.slice(0, lenUnique)); // Should print: [1, 2, 4]
console.log("Length:", lenUnique); // Should print: 3
console.log("---------------");

// ------------------------------------
//  Test array with negative numbers
// ------------------------------------
let arrNegative = [-1, -2, -3, -4];
console.log("Test array with negative numbers:");
console.log("Before:", arrNegative); // Should print: [-1, -2, -3, -4]
let lenNegative = removeElement(arrNegative, -2);
console.log("After:", arrNegative.slice(0, lenNegative)); // Should print: [-1, -3, -4]
console.log("Length:", lenNegative); // Should print: 3
console.log("---------------");

// ------------------------------------
//  Test array with zeros
// ------------------------------------
let arrZeros = [0, 0, 0, 0];
console.log("Test array with zeros:");
console.log("Before:", arrZeros); // Should print: [0, 0, 0, 0]
let lenZeros = removeElement(arrZeros, 0);
console.log("After:", arrZeros.slice(0, lenZeros)); // Should print: []
console.log("Length:", lenZeros); // Should print: 0
console.log("---------------");
