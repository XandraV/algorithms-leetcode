// Given an integer array nums, handle multiple queries of the following type:
// Calculate the sum of the elements of nums between indices left and right
// inclusive where left <= right.
// Implement the NumArray class:
// NumArray(int[] nums) Initializes the object with the integer array nums.
// int sumRange(int left, int right) Returns the sum of the elements of nums
// between indices left and right inclusive
// i.e. nums[left] + nums[left + 1] + ... + nums[right]
class NumArray {
  nums: number[];
  p: number[];
  constructor(nums: number[]) {
    this.nums = nums;
    this.p = new Array(nums.length + 1).fill(0);
    this.prefixSum();
  }

  prefixSum() {
    let curr = 0;
    for (let i = 1; i <= this.nums.length; i++) {
      curr += this.nums[i - 1];
      this.p[i] = curr;
    }
  }

  sumRange(left: number, right: number): number {
    return this.p[right + 1] - this.p[left];
  }
}

const test = new NumArray([1, 2, 3, 4, 5]);
console.log(test.sumRange(0, 2)); // 6
