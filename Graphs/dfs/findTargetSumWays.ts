// 494. Target Sum
// You are given an integer array nums and an integer target.
// You want to build an expression out of nums by adding one of the symbols '+' and '-' before
// each integer in nums and then concatenate all the integers.
// For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 1 and concatenate
// them to build the expression "+2-1".
// Return the number of different expressions that you can build, which evaluates to target.

function findTargetSumWays(nums: number[], target: number): number {
  let numWays = 0;
  function dfs(next: number, sum: number) {
    if (next >= nums.length) {
      if (sum === target) {
        numWays++;
      }
      return;
    }
    let curr = nums[next];
    //  either add next num
    dfs(next + 1, sum + curr);

    //  or subtract next num
    dfs(next + 1, sum - curr);
  }

  dfs(0, 0);

  return numWays;
}

console.log(findTargetSumWays([1, 1, 1, 1, 1], 3)); // 5

// Since sum is a primitive passed by value, each recursive call already gets its
// own copy — there's no shared state to undo.

// This DFS over a binary decision tree, at each index it branches into
// "add" or "subtract," and the call stack handles the state.
// Backtracking is only necessary when you're mutating shared state
// (e.g., pushing/popping from an array or modifying an object) between recursive calls.

// If we needed to track the actual +/- choices (e.g., return [[+1, -2, +3], ...]),
// we'd then build up a path array shared across calls,
// and then would need to backtrack:

// function findTargetSumWays(nums: number[], target: number): number[][] {
//   const results: number[][] = [];
//   const path: number[] = [];

//   function backtrack(next: number, sum: number) {
//     if (next >= nums.length) {
//       if (sum === target) results.push([...path]); // copy the path
//       return;
//     }

//     path.push(+nums[next]);                  // choose +
//     backtrack(next + 1, sum + nums[next]);
//     path.pop();                               // undo (backtrack)

//     path.push(-nums[next]);                  // choose -
//     backtrack(next + 1, sum - nums[next]);
//     path.pop();                               // undo (backtrack)
//   }

//   backtrack(0, 0);
//   return results;
// }

// path is a shared mutable array, so we must push before recursing and pop after —
// that's real backtracking. Without the pop, the array would keep growing and every
// branch would see stale choices from other branches.

// Rule of thumb: backtracking is needed when you mutate shared state
// (arrays, objects, sets). It's unnecessary for primitives passed as arguments,
// since the call stack isolates them automatically.
