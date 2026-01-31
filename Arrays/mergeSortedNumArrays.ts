// O(m + n) time | O(1) space
// Merges two sorted arrays nums1 and nums2 into nums1 as one sorted array in place
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let i = m - 1; // Pointer for nums1
  let j = n - 1; // Pointer for nums2
  let k = m + n - 1; // Pointer for merged array

  // Merge in reverse order
  while (i >= 0 && j >= 0) {
    console.log(nums1);
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }
  // we finish the while loop because
  // either i < 0 ie nums1 is exhausted
  // or j < 0 ie nums2 is exhausted
  // if nums2 finishes first then all remaining elements in nums1 are already in correct place

  // if num1 finishes first and nums2 still has elements, copy them to nums1
  /**
   * exampel: nums1 = [4,5,6,0,0,0] nums2 = [1,2,3]
   * after while loop nums1 = [4,5,6,4,5,6]
   * i = -1, j = 2, k = 2 (pointers/indxes)
   * now we need to copy remaining elements from nums2 to nums1
   * ie 0-2 from nums2 to 0-2 in nums1
   */

  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}

const test = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
merge(test, m, nums2, n);
console.log(test);
// [1,2,2,3,5,6]

function merge2(nums1: number[], m: number, nums2: number[], n: number): void {
    nums1.splice(m,n,...nums2)
    nums1.sort((a,b)=>a-b)
};