function maxSubarray(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let currentSum = nums[0];
  let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // when we take num[i] instead of currentSum + nums[i]
    // is when we restart the subArray (and the sum)
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    maxSum = Math.max(currentSum, maxSum);
  }
  return maxSum;
}

function maxSubarray2(nums) {
  if (nums.length === 0) {
    return 0;
  }

  let currentSum = nums[0];
  let maxSum = nums[0];

  let leftPointer = 1;
  let rightPointer = 1;

  for (let i = 1; i < nums.length; i++) {
    // when we take num[i] instead of currentSum + nums[i]
    // is when we restart the subArray (and the sum)
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    if (currentSum === nums[i]) {
      leftPointer = i;
      rightPointer = i;
    }
    rightPointer++;
    maxSum = Math.max(currentSum, maxSum);
  }

  res = nums.slice(leftPointer, rightPointer + 1);
  return { maxSum, res };
}
// ------------------------------------
//  Test array with both negative and positive numbers
// ------------------------------------
console.log("Mixed numbers:");
let mixedNums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log("Array:", mixedNums);
let maxSumMixed = maxSubarray(mixedNums);
console.log("Expected Max Subarray Sum: 6");
console.log("Actual Max Subarray Sum:", maxSumMixed);
console.log("---------------");

// ------------------------------------
//  Test array with all positive numbers
// ------------------------------------
console.log("All positive numbers:");
let allPositive = [1, 2, 3, 4, 5];
console.log("Array:", allPositive);
let maxSumPositive = maxSubarray(allPositive);
console.log("Expected Max Subarray Sum: 15");
console.log("Actual Max Subarray Sum:", maxSumPositive);
console.log("---------------");

// ------------------------------------
//  Test array with all negative numbers
// ------------------------------------
console.log("All negative numbers:");
let allNegative = [-1, -2, -3, -4, -5];
console.log("Array:", allNegative);
let maxSumNegative = maxSubarray(allNegative);
console.log("Expected Max Subarray Sum: -1");
console.log("Actual Max Subarray Sum:", maxSumNegative);
console.log("---------------");

// ------------------------------------
//  Test empty array
// ------------------------------------
console.log("Empty array:");
let emptyNums = [];
console.log("Array:", emptyNums);
let maxSumEmpty = maxSubarray(emptyNums);
console.log("Expected Max Subarray Sum: 0");
console.log("Actual Max Subarray Sum:", maxSumEmpty);
console.log("---------------");

// ------------------------------------
//  Test array with single element
// ------------------------------------
console.log("Single element:");
let singleElement = [3];
console.log("Array:", singleElement);
let maxSumSingle = maxSubarray(singleElement);
console.log("Expected Max Subarray Sum: 3");
console.log("Actual Max Subarray Sum:", maxSumSingle);
console.log("---------------");

// ------------------------------------
//  Test array with zeros
// ------------------------------------
console.log("Array with zeros:");
let withZeros = [0, 0, 0, 0];
console.log("Array:", withZeros);
let maxSumZeros = maxSubarray(withZeros);
console.log("Expected Max Subarray Sum: 0");
console.log("Actual Max Subarray Sum:", maxSumZeros);
console.log("---------------");

// ------------------------------------
//  Test array with one positive and one negative number
// ------------------------------------
console.log("One positive and one negative number:");
let posNeg = [1, -1];
console.log("Array:", posNeg);
let maxSumPosNeg = maxSubarray(posNeg);
console.log("Expected Max Subarray Sum: 1");
console.log("Actual Max Subarray Sum:", maxSumPosNeg);
console.log("---------------");

console.log("Mixed numbers:");
let mixedNums2 = [-2, 1, -3, 4, -1, 2, 1, -5, 10, 10, 10, 10, 10];
console.log("Array:", mixedNums2);
let maxSumMixed2 = maxSubarray(mixedNums2);
console.log("Expected Max Subarray Sum: 51");
console.log("Actual Max Subarray Sum:", maxSumMixed2);
console.log("---------------");

console.log("Mixed numbers:");
let mixedNums3 = [
  -2, 1, -3, 4, -1, 2, 1, -5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 10, 10, 10,
];
console.log("Array:", mixedNums3);
let maxSumMixed3 = maxSubarray(mixedNums3);
console.log("Expected Max Subarray Sum: 51");
console.log("Actual Max Subarray Sum:", maxSumMixed3);
console.log("---------------");
