// 47. Permutations
// Given a collection of numbers, nums, that might contain duplicates,
// return all possible unique permutations in any order.
function permuteUnique(nums: number[]): number[][] {
  const result: number[][] = [];
  const path: number[] = [];
  const freq = new Map<number, number>();

  for (let num of nums) {
    freq.set(num, (freq.get(num) ?? 0) + 1);
  }

  function backtrack() {
    // Base case: path has all numbers
    if (path.length === nums.length) {
      result.push([...path]); // push a copy of path
      return;
    }

    // Try each number
    for (let num of freq.keys()) {
      let count = freq.get(num)!;
      if (count === 0) continue;

      path.push(num);
      freq.set(num, count - 1); // decrement in map

      backtrack(); // recurse

      path.pop();
      freq.set(num, count); // restore count (backtrack)
    }
  }

  backtrack(); // start recursion
  return result;
}

console.log(permuteUnique([1, 1, 2]));
// [[1,1,2],[1,2,1],[2,1,1]]
