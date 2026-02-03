// Given an integer array nums and an integer k,
// return the maximum length of a subarray that sums to k.
// If there is not one, return 0 instead.
function maxSubArrayLen(nums: number[], k: number): number {
  let longest = 0;
  const sumIdxMap = new Map();
  const p = new Array(nums.length); // prefix sum
  let currSum = 0;

  sumIdxMap.set(0, -1);

  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    p[i] = currSum;
    if (!sumIdxMap.has(currSum)) {
      sumIdxMap.set(currSum, i);
    }
    //  p[i] - sumToLookup = k
    // If a subarray from index j+1 to i sums to k, then:
    //  p[i] - p[j] = k
    // So if we know a previous prefix sum equal to p[i] - k,
    // we’ve found a valid subarray ending at i.
    let sumToLookup = p[i] - k;
    if (sumIdxMap.has(sumToLookup)) {
      let lengthOfSubArray = i - sumIdxMap.get(sumToLookup);
      longest = Math.max(longest, lengthOfSubArray);
    }
  }

  return longest;
}
const nums = [1, -1, 5, -2, 3],
  k = 3;
console.log(maxSubArrayLen(nums, k)); // 4
