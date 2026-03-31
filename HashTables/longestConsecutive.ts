function longestConsecutive(nums: number[]): number {
  let longest = 0;
  const numSet = new Set(nums);

  for (let num of numSet) {
    let curr = num;
    if (!numSet.has(curr - 1)) {
      let streak = 1;
      while (numSet.has(curr + 1)) {
        curr++;
        streak++;
      }
      longest = Math.max(longest, streak);
    }
  }

  return longest;
}

console.log(longestConsecutive([100, 4, 200, 1, 3, 2])); // 4
