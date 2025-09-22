const threeSum = function (nums) {
  let result = [];
  const sortedNums = nums.sort((a, b) => a - b);

  // sortedNums.length - 2 because we are checking current and next
  for (let i = 0; i < sortedNums.length - 2; i++) {
    // This ensures we don’t start multiple triplets with the same number as the first element.
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

    let left = i + 1;
    let right = sortedNums.length - 1;

    while (left < right) {
      sum = sortedNums[i] + sortedNums[left] + sortedNums[right];

      if (sum < 0) {
        left++;
      } else if (sum > 0) {
        right--;
      } else {
        result.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
        left++;
        right--;

        // Even if the first number is unique, the pairs we find (left, right) can repeat.
        // Here we skip duplicatese in the inner loop to avoid duplicate pairs for a given first element.
        while (left < right && sortedNums[left] === sortedNums[left - 1])
          left++;
        while (left < right && sortedNums[right] === sortedNums[right + 1])
          right--;
      }
    }
  }

  return result;
};