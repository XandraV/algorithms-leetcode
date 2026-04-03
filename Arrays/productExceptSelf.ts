// 238. Product of Array Except Self
// Given an integer array nums, return an array answer such that answer[i] is equal to the
// product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const result = new Array(n).fill(1);
  // Calculate the prefix products ie left products and store them in the result array
  let prefix = 1;
  for (let i = 0; i < n; i++) {
    result[i] = prefix;
    prefix *= nums[i];
  }

  // Calculate the suffix products ie right products
  // and multiply them with the corresponding prefix products in the result array
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffix; // multiply the current result (ie left product)
    suffix *= nums[i];
  }

  return result;
}

console.log(productExceptSelf([1, 2, 3, 4])); // [24,12,8,6]
