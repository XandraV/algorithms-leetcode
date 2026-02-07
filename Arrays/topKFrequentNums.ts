// 347 Top k frequent elements
// Given an integer array nums and an integer k, return the k most
// frequent elements. You may return the answer in any order.
function topKFrequentNums(nums: number[], k: number): number[] {
  const freqMap = new Map<number, number>();

  for (let num of nums) {
    freqMap.set(num, (freqMap.get(num) ?? 0) + 1);
  }

  // sort numbers by frequency
  return Array.from(freqMap.keys())
    .sort((a, b) => freqMap.get(b)! - freqMap.get(a)!)
    .slice(0, k);
}

console.log(topKFrequentNums([1, 2, 1, 2, 1, 2, 3, 1, 3, 2], 2));
// [1,2]
