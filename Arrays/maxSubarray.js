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
    // this keeps track of the best possible sum that ends exactly at position i.
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    if (nums[i] > currentSum + nums[i]) {
      leftPointer = i;
      rightPointer = i;
    }
    rightPointer++;
    maxSum = Math.max(currentSum, maxSum);
  }

  res = nums.slice(leftPointer, rightPointer + 1);
  return { maxSum, res };
}

// avoidning Math.max
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
    // currentSum = Math.max(nums[i], currentSum + nums[i]);
    if (nums[i] > currentSum + nums[i]) {
      currentSum = nums[i];
      leftPointer = i;
      rightPointer = i;
    } else {
      currentSum += nums[i];
    }

    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
    rightPointer++;
  }

  res = nums.slice(leftPointer, rightPointer + 1);
  return { maxSum, res };
}

let mixedNums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let maxSumMixed = maxSubarray(mixedNums);
console.log("Actual Max Subarray Sum:", maxSumMixed); // 6

let allPositive = [1, 2, 3, 4, 5];
let maxSumPositive = maxSubarray(allPositive);
console.log("Actual Max Subarray Sum:", maxSumPositive); //15

let allNegative = [-1, -2, -3, -4, -5];
let maxSumNegative = maxSubarray(allNegative);
console.log("Actual Max Subarray Sum:", maxSumNegative); // -1

let emptyNums = [];
let maxSumEmpty = maxSubarray(emptyNums);
console.log("Actual Max Subarray Sum:", maxSumEmpty); //0

let singleElement = [3];
let maxSumSingle = maxSubarray(singleElement);
console.log("Actual Max Subarray Sum:", maxSumSingle); // 3

let withZeros = [0, 0, 0, 0];
let maxSumZeros = maxSubarray(withZeros);
console.log("Actual Max Subarray Sum:", maxSumZeros); // 0

let posNeg = [1, -1];
let maxSumPosNeg = maxSubarray(posNeg);
console.log("Actual Max Subarray Sum:", maxSumPosNeg); // 1

let mixedNums2 = [-2, 1, -3, 4, -1, 2, 1, -5, 10, 10, 10, 10, 10];
let maxSumMixed2 = maxSubarray(mixedNums2);
console.log("Actual Max Subarray Sum:", maxSumMixed2); // 51

let mixedNums3 = [
  -2, 1, -3, 4, -1, 2, 1, -5, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 10, 10, 10,
];
let maxSumMixed3 = maxSubarray(mixedNums3);
console.log("Actual Max Subarray Sum:", maxSumMixed3); //51
