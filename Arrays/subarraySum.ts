// 560. Subarray Sum Equals K
// Given an array of integers nums and an integer k,
// return the total number of subarrays whose sum equals to k.
// A subarray is a contiguous non-empty sequence of elements within an array.
function subarraySum(nums: number[], k: number): number {
  let numOfSubArrays = 0;
  let prefixSum: number[] = [];
  prefixSum[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];
  }
  // sum, freq of that sum
  const sumIdxMap = new Map<number, number>();
  sumIdxMap.set(0, 1);
  for (let j = 0; j < nums.length; j++) {
    let complement = prefixSum[j] - k;
    let complementFreq = sumIdxMap.get(complement) ?? 0;

    if (complementFreq > 0) {
      numOfSubArrays += complementFreq;
    }
    sumIdxMap.set(prefixSum[j], (sumIdxMap.get(prefixSum[j]) ?? 0) + 1);
  }

  return numOfSubArrays;
}

console.log(subarraySum([1, 1, 1], 2)); //2
