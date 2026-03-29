function threeSum(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);
  const seen = new Set<string>();

  for (let i = 0; i < nums.length; i++) {
    // a + b + c = 0
    const a = nums[i];
    const subTarget = -a;

    // const rest = nums.slice(0, i).concat(nums.slice(i + 1)); <- just skip i instead of creating a new array

    const memo: Map<number, number> = new Map();
    for (let j = 0; j < nums.length; j++) {
      if (j === i) continue;
      // b = rest[i]
      // c = subTarget - b
      // subTarget = b + c
      const b = nums[j];
      const c = subTarget - b;
      if (memo.has(c)) {
        const triplet = [a, b, c].sort((x, y) => x - y);

        if (seen.has(triplet.toString())) {
          continue;
        }
        seen.add(triplet.toString());
        result.push([a, b, c]);
      }
      memo.set(b, j);
    }
  }

  return result;
}
// [[-1,-1,2],[-1,0,1]]
console.log(threeSum([-1, 0, 1, 2, -1, -4]));

function threeSumOptimal(nums: number[]): number[][] {
  const result: number[][] = [];
  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    // a + b + c = 0
    const a = nums[i];
    const subTarget = -a;

    // const rest = nums.slice(0, i).concat(nums.slice(i + 1)); <- just skip i instead of creating a new array

    const memo: Set<number> = new Set();
    for (let j = i + 1; j < nums.length; j++) {
      // b = rest[i]
      // c = subTarget - b
      // subTarget = b + c
      const b = nums[j];
      const c = subTarget - b;

      if (memo.has(c)) {
        const triplet = [a, b, c].sort((x, y) => x - y);

        result.push(triplet);
        // skip duplicate b after every triplet
        while (j + 1 < nums.length && nums[j] === nums[j + 1]) j++;
      }

      memo.add(b);
    }
  }

  return result;
}
// [[-1,-1,2],[-1,0,1]]
console.log(threeSum([-1, 0, 1, 2, -1, -4]));
