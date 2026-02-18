// 39. Combination Sum
// Given an array of distinct integers candidates and a target integer target,
// return a list of all unique combinations of candidates where the chosen numbers
// sum to target. You may return the combinations in any order.
// The same number may be chosen from candidates an unlimited number of times.
// Two combinations are unique if the frequency of at least one of the chosen
// numbers is different.
// The test cases are generated such that the number of unique combinations
// that sum up to target is less than 150 combinations for the given input.
function combinationSum(candidates: number[], target: number): number[][] {
  const result: number[][] = [];
  const path: number[] = [];
  let pathSum = 0;

  // passing down start ensures we only generate combinations, not permutations
  function backtrack(start: number) {
    if (pathSum > target) return;
    if (pathSum === target) {
      result.push([...path]); // make a copy
      return;
    }

    for (let i = start; i < candidates.length; i++) {
      // pick a number
      path.push(candidates[i]);
      pathSum += candidates[i];
      // explore, recursive call can reuse same number
      backtrack(i);

      // unchoose/backtrack/remove
      path.pop();
      pathSum -= candidates[i];
    }
  }

  backtrack(0);

  return result;
}

// Permutations: order matters → we don’t care about duplicates in different order
// Combination Sum: order doesn’t matter → [2,3] = [3,2] → only keep one
// Start enforces the monotonic order of picking to avoid duplicate combinations.

console.log(combinationSum([2, 3, 6, 7], 7));
