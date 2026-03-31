// 27. Remove Element
// Given an integer array nums and an integer val, remove all occurrences of val in nums in-place.
// The order of the elements may be changed. Then return the number of elements in nums which
// are not equal to val.

// Consider the number of elements in nums which are not equal to val be k, to get accepted,
// you need to do the following things:

// Change the array nums such that the first k elements of nums contain the elements which
// are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

function removeElement(nums: number[], val: number): number {
  let left = 0;
  let right = nums.length - 1;
  while (right >= left) {
    if (nums[left] === val) {
      // move right pointer until we find a non-val element
      while (nums[right] === val && right >= left) {
        right--;
      }

      // swap the val element at left with the non-val element at right
      [nums[left], nums[right]] = [nums[right], nums[left]];
      right--;
    }
    left++;
  }
  return left; // everything before left is not val, and everything after left is val
}

console.log(removeElement([3, 2, 2, 3], 3)); // 2

// O(n) time complexity, O(1) space complexity
// Thinking in terms of pointer movement.