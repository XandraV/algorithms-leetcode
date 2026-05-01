// 46. Permutations
// Given an array nums of distinct integers, return all the possible permutations.
// You can return the answer in any order.
function permute(nums: number[]): number[][] {
  const used: boolean[] = new Array(nums.length).fill(false); // track used numbers
  const permutations: number[][] = [];

  function backtrack(path: number[]) {
    if (path.length === nums.length) {
      permutations.push([...path]);
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue; // skip if already in path
      let next = nums[i];
      used[i] = true;
      // if (path.includes(nums[i])) continue; don't need this if we have used array to track used numbers

      path.push(next);
      backtrack(path);
      path.pop();
      used[i] = false;
    }
  }

  backtrack([]);
  return permutations;
}

function permute2(nums: number[]): number[][] {
  const result: number[][] = []; // store all permutations
  const path: number[] = []; // current permutation being built
  const used: boolean[] = new Array(nums.length).fill(false); // track used numbers

  function backtrack() {
    // Base case: path has all numbers
    if (path.length === nums.length) {
      result.push([...path]); // push a copy of path
      return;
    }

    // Try each number
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue; // skip if already in path
      // Choose
      path.push(nums[i]);
      used[i] = true;
      // Explore (recurse)
      backtrack();
      // Un-choose (backtrack/remove)
      path.pop();
      used[i] = false;
    }
  }

  backtrack(); // start recursion
  return result;
}

console.log([1, 2, 3]);
// [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
