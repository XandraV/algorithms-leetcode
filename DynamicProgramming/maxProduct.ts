function maxProduct(nums: number[]): number {
  let maxSoFar = nums[0];
  // need minimum because if we multiply by negative number,
  // the minimum turns into maximum
  let minSoFar = nums[0];
  let result = nums[0];

  for (let i = 1; i < nums.length; i++) {
    const curr = nums[i];

    let temp = maxSoFar * curr;
    maxSoFar = Math.max(curr, temp, minSoFar * curr);
    // maxSoFar is already calculated above hence we store it in temp
    // to avoid using updated value of maxSoFar in the next line
    minSoFar = Math.min(curr, temp, minSoFar * curr);

    result = Math.max(result, maxSoFar);
  }

  return result;
}

console.log(maxProduct([2, 3, -2, 4])); // 6
console.log(maxProduct([-2, 0, -1])); // 0
console.log(maxProduct([0, 2])); // 2
