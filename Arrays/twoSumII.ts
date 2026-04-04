// 167. Two Sum II - Input Array Is Sorted
// Given a 1-indexed array of integers numbers that is already sorted in non-decreasing order, find two numbers such that they add up to a specific target number. Let these two numbers be numbers[index1] and numbers[index2] where 1 <= index1 < index2 <= numbers.length.
// Return the indices of the two numbers index1 and index2, each incremented by one, as an integer array [index1, index2] of length 2.
// The tests are generated such that there is exactly one solution. You may not use the same element twice.
// Your solution must use only constant extra space.

// Two-Pointer Approach
// Start with one pointer at the beginning (left) and one at the end (right).
// - If the sum is too small, move left right (increase the sum).
// - If the sum is too large, move right left (decrease the sum).
// - If the sum matches, you found your answer.
// This runs in O(n) time and O(1) space — better than the hash map approach which uses O(n) space.
function twoSum(numbers: number[], target: number): number[] {
  const res: number[] = [];

  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    let currSum = numbers[left] + numbers[right];

    if(currSum === target){
        return [left+1, right+1]
    }
    if (currSum > target) {
      right--;
    } else {
      left++;
    }
  }

  return res;
}

function twoSum2(numbers: number[], target: number): number[] {
  const res: number[] = [];
  // number, index in numbers arr
  const numMap: Map<number, number> = new Map();

  for (let i = 0; i < numbers.length; i++) {
    let curr = numbers[i];
    let complement = target - curr;
    if (numMap.has(complement)) {
      res[0] = numMap.get(complement)! + 1;
      res[1] = i + 1;
    } else {
      numMap.set(curr, i);
    }
  }

  return res;
}