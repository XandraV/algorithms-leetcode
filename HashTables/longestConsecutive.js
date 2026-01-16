const longestConsecutive = function (nums) {
  // [100,4,200,1,3,2]
  const numSet = new Set(nums);
  let maxLength = 0;
  console.log(numSet);
  for (const num of numSet) {
    console.log(num, num - 1);
    if (!numSet.has(num - 1)) {
      let currentNum = num;
      let length = 1;

      while (numSet.has(currentNum + 1)) {
        currentNum++;
        length++;
      }

      maxLength = Math.max(maxLength, length);
    }
  }
  return maxLength;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
