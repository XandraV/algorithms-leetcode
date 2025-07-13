function twoSum(nums, target) {
  let numMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    numMap.set(num, i);
  }
  return [];
}

// ---------------
// Unique Solution
// ---------------
console.log("Unique Solution:");
console.log("Input: [2, 7, 11, 15], Target: 9");
console.log("Output: ", JSON.stringify(twoSum([2, 7, 11, 15], 9)));
console.log("---------------");

// ---------------
// Duplicate Numbers
// ---------------
console.log("Duplicate Numbers:");
console.log("Input: [3, 3, 11, 15], Target: 6");
console.log("Output: ", JSON.stringify(twoSum([3, 3, 11, 15], 6)));
console.log("---------------");

// ---------------
// No Solution
// ---------------
console.log("No Solution:");
console.log("Input: [2, 7, 11, 15], Target: 30");
console.log("Output: ", JSON.stringify(twoSum([2, 7, 11, 15], 30)));
console.log("---------------");

// ---------------
// Negative Numbers
// ---------------
console.log("Negative Numbers:");
console.log("Input: [-1, -2, -3, -4, -5], Target: -8");
console.log("Output: ", JSON.stringify(twoSum([-1, -2, -3, -4, -5], -8)));
console.log("---------------");

// ---------------
// Empty Array
// ---------------
console.log("Empty Array:");
console.log("Input: [], Target: 0");
console.log("Output: ", JSON.stringify(twoSum([], 0)));
console.log("---------------");


// inefficient nested loop solution
function twoSum2(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9)); //[1,0]
