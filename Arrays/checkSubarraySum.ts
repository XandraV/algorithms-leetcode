// 523. Continuous Subarray Sum
// Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.
// A good subarray is a subarray where:
// its length is at least two, and
// the sum of the elements of the subarray is a multiple of k.
// Note that:
// A subarray is a contiguous part of the array.
// An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.

function checkSubarraySum(nums: number[], k: number): boolean {
  //  If two prefix sums have the same remainder when divided by k,
  //  then the subarray between them has a sum that's a multiple of k.
  //  You just need to ensure the subarray length is at least 2.
  const remainderMap: Map<number, number> = new Map(); // <remainder, index>
  remainderMap.set(0, 0); // base case: prefix sum 0 at position 0

  const prefixSum: number[] = [0];
  for (let num of nums) {
    prefixSum.push(prefixSum[prefixSum.length - 1] + num);
    const remainder = prefixSum[prefixSum.length - 1] % k;
    const currentIndex = prefixSum.length - 1;

    if (remainderMap.has(remainder)) {
      // Ensure subarray length is at least 2
      if (currentIndex - remainderMap.get(remainder)! >= 2) {
        return true;
      }
    } else {
      // Only store the first occurrence to maximize subarray length
      remainderMap.set(remainder, currentIndex);
    }
  }
  return false;
}

// function checkSubarraySum(nums: number[], k: number): boolean {
//  const prefixSum: number[] = [0];
//   for (let num of nums) {
//     prefixSum.push(prefixSum[prefixSum.length - 1] + num);
//   }

//   for (let i = 0; i < prefixSum.length; i++) {
//     for (let j = i + 2; j < prefixSum.length; j++) {
//       let temp = prefixSum[j] - prefixSum[i];
//       if (temp % k === 0) return true;
//     }
//   }
//   return false
// }
