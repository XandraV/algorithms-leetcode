/**
You’re given an array of integers, e.g. [1,2,3].
You need to rearrange its elements in-place 
(no extra arrays, only constant memory allowed).
The goal is to transform it into the next permutation 
in lexicographical order.
If such a permutation doesn’t exist 
(meaning the array is in descending order, e.g. [3,2,1]), 
then you must rearrange it into the lowest possible order (ascending).

So basically:
Find the "next bigger ordering" of the same numbers.
If that’s impossible, reset to the smallest ordering.
 */
const nextPermutation = function (nums) {
  let dipIndex = -1;
  //  Find the dip ie the first element from the right
  // that is smaller than its next.
  for (let i = nums.length - 2; i >= 0; i--) {
    //O(n)
    if (nums[i] < nums[i + 1]) {
      dipIndex = i;
      break;
    }
  }
  // if no such index then reverse the array
  if (dipIndex == -1) {
    return nums.reverse();
  }

  // Find the smallest element greater than nums[dipIndex] to the right.
  let swapIndex = nums.length - 1;
  while (swapIndex > dipIndex && nums[swapIndex] <= nums[dipIndex]) {
    //O(n)
    swapIndex--;
  }

  // swap nums[swapIndex] with nums[dipIndex]
  [nums[dipIndex], nums[swapIndex]] = [nums[swapIndex], nums[dipIndex]];
  // longer version to swap
  //   let smallestGreaterNumber = nums[swapIndex];
  //   let numToSwap = nums[dipIndex];
  //   nums[dipIndex] = smallestGreaterNumber;
  //   nums[swapIndex] = numToSwap;

  // Sort (or reverse) everything to the right of the dip index.
  let left = dipIndex + 1,
    right = nums.length - 1;
  while (left < right) {
    //O(n)
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }

  return nums;
};
/**
Finding the dip → O(n)
Finding the swap candidate → O(n)
Reverses the suffix → O(n)
Overall = O(n)
 */
