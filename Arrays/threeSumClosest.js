const threeSumClosest = function (nums, target) {
  let result = 0;
  const sortedNums = nums.sort((a, b) => a - b);
  let minDistance = Infinity;
  // sortedNums.length - 2 because we are checking current and next
  for (let i = 0; i < sortedNums.length - 2; i++) {
    // This ensures we don’t start multiple triplets with the same number as the first element.
    // if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

    let left = i + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      const sum = sortedNums[i] + sortedNums[left] + sortedNums[right];
      const distance = Math.abs(target - sum);
      if (distance === 0) return sum; // exact match
      if (distance < minDistance) {
        // distance is absolute value
        minDistance = Math.abs(target - sum);
        result = sum;
      }
      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      }
    }
  }

  return result;
};
