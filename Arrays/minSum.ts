// You are given two arrays nums1 and nums2 consisting of positive integers.
// You have to replace all the 0's in both arrays with strictly positive integers
//  such that the sum of elements of both arrays becomes equal.
// Return the minimum equal sum you can obtain, or -1 if it is impossible.

const sum = (arr: number[]) =>
  arr.reduce((accumulator, currentValue) => accumulator + currentValue);

// O(n) + O(m) = O(n + m) time complexity
// O(1) space complexity
function minSum(nums1: number[], nums2: number[]): number {
  const numOfZeros1 = nums1.filter((num) => num === 0).length; // O(n)
  const numOfZeros2 = nums2.filter((num) => num === 0).length; // O(m)
  const sum1 = sum(nums1); // O(n)
  const sum2 = sum(nums2); // O(m)

  const minSumOfNums1 = sum1 + numOfZeros1 * 1;
  const minSumOfNums2 = sum2 + numOfZeros2 * 1;

  if (
    (numOfZeros1 === 0 && minSumOfNums2 > sum1) ||
    (numOfZeros2 === 0 && minSumOfNums1 > sum2)
  ) {
    return -1;
  }

  const minimumArraySum = Math.max(
   minSumOfNums1,
   minSumOfNums2
  );

  return minimumArraySum;
}

const nums1 = [3, 2, 0, 1, 0],
  nums2 = [6, 5, 0];
const nums3 = [2, 0, 2, 0],
  nums4 = [1, 4];
console.log(minSum(nums1, nums2)); // 12
console.log(minSum(nums3, nums4)); // -1
