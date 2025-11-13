function removeDuplicates(nums) {
  const res = new Set(nums);
  return Array.from(res).length;
}

function removeDuplicates2(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let writePointer = 1;

  // readPointer is index of num in nums array
  // writePointer is index of the nums in the no-duplicates array ie it'll move
  // behind readPointer at some point
  for (let readPointer = 1; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] !== nums[readPointer - 1]) {
      nums[writePointer] = nums[readPointer];
      writePointer++;
    }
  }
  // to remove duplicates remove everything after writePointer nums.slice(0,writePointer)
  return writePointer;
}

let noDups = [1, 2, 3, 4];
let lenNoDups = removeDuplicates(noDups);
console.log("After:", noDups.slice(0, lenNoDups));
console.log("Length:", lenNoDups);

let withDups = [1, 1, 2, 2, 3];
let lenWithDups = removeDuplicates(withDups);
console.log("After:", withDups.slice(0, lenWithDups));
console.log("Length:", lenWithDups);

let emptyArr = [];
let lenEmpty = removeDuplicates(emptyArr);
console.log("After:", emptyArr.slice(0, lenEmpty));
console.log("Length:", lenEmpty);

let allSame = [3, 3, 3];
let lenAllSame = removeDuplicates(allSame);
console.log("After:", allSame.slice(0, lenAllSame));
console.log("Length:", lenAllSame);

let negNumbers = [-1, -1, 0, 2, 2];
let lenNeg = removeDuplicates(negNumbers);
console.log("After:", negNumbers.slice(0, lenNeg));
console.log("Length:", lenNeg);

let singleElem = [1];
let lenSingle = removeDuplicates(singleElem);
console.log("After:", singleElem.slice(0, lenSingle));
console.log("Length:", lenSingle);
