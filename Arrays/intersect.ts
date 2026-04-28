// 350. Intersection of Two Arrays II
// Given two integer arrays nums1 and nums2, return an array of their intersection.
// Each element in the result must appear as many times as it shows in both arrays and
// you may return the result in any order.

function intersect(nums1: number[], nums2: number[]): number[] {
  const res: number[] = [];
  const freq: Map<number, number> = new Map();

  let smallerArray = nums1.length <= nums2.length ? nums1 : nums2;
  let largerArray = nums1.length > nums2.length ? nums1 : nums2;
  // building the frequency map from the smaller array, which reduces memory usage
  // as we cannot have more numbers in common than the numbers in the smaller array
  // hence this going to be our space complexity: O(min(n, m))
  for (const num of smallerArray) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  for (let num of largerArray) {
    // if (freq.has(num) && freq.get(num)! > 0) {
    //     res.push(num);
    //     freq.set(num, freq.get(num)! - 1);
    // }

    if (freq.has(num)) {
      const f = freq.get(num);
      if (f > 0) {
        res.push(num);
        freq.set(num, f - 1);
      } else {
        freq.delete(num);
      }
    }
  }

  return res;
}
