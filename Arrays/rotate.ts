// 189. leetcode
// Given an integer array nums, rotate the array to
// the right by k steps, where k is non-negative.
// [1, 2, 3 | 4, 5]; rotate by 2 -> [4,5,1,2,3]
// 3,2,1 | 5 ,4
// 4 , 5 , 1, 2, 3

// 1,2,3,4,5,6,7 to reverse swap item at start with end
// 7,2,3,4,5,6,1
// 7,6,5,4,3,2,1
function rotate(nums: number[], k: number): void {
  // Limit k to the array size
  k = k % nums.length;
  const boundary = nums.length - k;
  const numsLength = nums.length - 1;

  // Reverse the first part of the array
  let left = 0;
  let right = boundary - 1;

  // 0->nums.length - k
  // i++
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }

  // Reverse the second part of the array
  left = boundary;
  right = numsLength;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }

  // Reverse the whole array

  left = 0;
  right = numsLength;
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
}

const t = [1, 2, 3, 4, 5, 6, 7];
rotate(t, 3);
console.log(t); // [5,6,7,1,2,3,4]

/**
Time Complexity

You run three while-loops, each reversing part (or all) of the array.
1st loop: reverses first n - k elements → O(n - k)
2nd loop: reverses last k elements → O(k)
3rd loop: reverses the whole array → O(n)
Total work: O(n - k) + O(k) + O(n) = O(2n) = O(n)
✅ Time complexity: O(n)

Space Complexity

You only use a few variables (left, right, etc.)
All swaps are done in-place
No extra arrays or data structures
✅ Space complexity: O(1)
 */
