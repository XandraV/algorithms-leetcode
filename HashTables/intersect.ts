// Given two integer arrays nums1 and nums2,
// return an array of their intersection.
// Each element in the result must appear
// as many times as it shows in both arrays and you may return the result in any order.

function intersect1(nums1: number[], nums2: number[]): number[] {
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
    //   res.push(num);
    //   freq.set(num, freq.get(num)! - 1);
    // }

    if (freq.has(num)) {
      const f = freq.get(num) ?? 0;
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
// Time complexity: O(n + m)
// Space complexity: O(min(n, m))

function intersect(nums1: number[], nums2: number[]): number[] {
  const result: number[] = [];
  let small = nums1.length <= nums2.length ? nums1 : nums2;
  let large = nums1.length > nums2.length ? nums1 : nums2;
  console.log(small);
  console.log(large);
  // loop over the smaller array as the result array cannot be longer than the smaller array
  for (let i = 0; i < small.length; i++) {
    const current = small[i];
    // check if num is in the other array too
    const index = large.indexOf(current); // O(n)
    if (index > -1) {
      // add it to result
      result.push(current);
      // delete it from the other array
      large.splice(index, 1); // O(n)
    }
  }
  return result;
}
// indexOf → O(n) + splice → O(n) => Inside a loop → O(n²) worst case

console.log(intersect([1, 2, 3, 3], [3, 3, 5]));
console.log(intersect([1, 3, 3, 3], [3, 3, 3]));

console.log(intersect1([1, 2, 3, 3], [3, 3, 5]));
console.log(intersect1([1, 3, 3, 3], [3, 3, 3]));
