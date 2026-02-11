// 60. Permutation Sequence
// The set [1, 2, 3, ..., n] contains a total of n! unique permutations.
// By listing and labeling all of the permutations in order,
// we get the following sequence for n = 3:

// "123"
// "132"
// "213"
// "231"
// "312"
// "321"
// Given n and k, return the kth permutation sequence.
function getPermutation(n: number, k: number): string {
  const nums = Array.from({ length: n }, (_, i) => i + 1);
  let kthPermutation = "";
  let resultCount: number = 0; // store all permutations
  const path: number[] = []; // current permutation being built
  const used: boolean[] = new Array(nums.length).fill(false); // track used numbers

  function backtrack() {
    if (resultCount === k - 1) {
      kthPermutation = path.join("");
    }

    // Base case: path has all numbers
    if (path.length === nums.length) {
      resultCount++; // push a copy of path
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
    if (kthPermutation) return;
  }

  backtrack(); // start recursion

  return kthPermutation;
}

console.log(getPermutation(3, 3));
// 213
