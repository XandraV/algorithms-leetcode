// 78. Subsets
// Given an integer array nums of unique elements, return all 
// possible subsets (the power set).
// The solution set must not contain duplicate subsets.
// Return the solution in any order.
function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const path: number[] = [];

  function backtrack(start: number) {
    // add current subset
    result.push([...path]);
    console.log(path);

    for (let i = start; i < nums.length; i++) {
      // choose
      path.push(nums[i]);

      // explore
      backtrack(i + 1);

      // unchoose
      path.pop();
    }
  }

  backtrack(0);
  return result;
}

console.log(subsets([1, 2, 3]));
