function threeSum(nums) {
  const result = [];
  const seen = new Set(); // to avoid duplicate triplets

  for (let j = 0; j < nums.length; j++) {
    const fixed = nums[j];
    const subTarget = -fixed;

    // instead of splice (which mutates), build a copy without nums[j]
    const newArray = nums.slice(0, j).concat(nums.slice(j + 1));

    const numMap = new Map();

    for (let i = 0; i < newArray.length; i++) {
      const num = newArray[i];
      const complement = subTarget - num;

      if (numMap.has(complement)) {
        const triplet = [fixed, complement, num].sort((a, b) => a - b);
        const key = triplet.toString();

        if (!seen.has(key)) {
          result.push(triplet);
          seen.add(key);
        }
      }

      numMap.set(num, i);
    }
  }

  return result;
}
