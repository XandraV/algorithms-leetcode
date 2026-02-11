/**
You’re given an array of integers, e.g. [1,2,3].
You need to rearrange its elements in-place 
(no extra arrays, only constant memory allowed).
The goal is to transform it into the next permutation 
in lexicographical order.
If such a permutation doesn’t exist 
(meaning the array is in descending order, e.g. [3,2,1]), 
then you must rearrange it into the lowest possible order (ascending).

Find the "next bigger ordering" of the same numbers.
If that’s impossible, reset to the smallest ordering.
 */
function nextPermutation(nums: number[]): void {
  let pivot = -1;

  // 1. Find pivot
  for (let i = nums.length - 1; i > 0; i--) {
    if (nums[i] > nums[i - 1]) {
      pivot = i - 1;
      break;
    }
  }

  // 2. If no pivot, reverse whole array
  if (pivot === -1) {
    nums.reverse();
    return;
  }

  // 3. Find smallest greater element on the right
  let j = nums.length - 1;
  while (nums[j] <= nums[pivot]) {
    j--;
  }

  // 4. Swap
  [nums[pivot], nums[j]] = [nums[j], nums[pivot]];

  // 5. Reverse suffix
  let left = pivot + 1;
  let right = nums.length - 1;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}
console.log(nextPermutation([1, 2, 5, 4, 3]));
// [1, 3, 2, 4, 5]

// Scan from right to find first nums[i] < nums[i+1]
// If none → reverse whole array
// Find smallest number greater than nums[i] to the right
// Swap them
// Reverse everything right of i
