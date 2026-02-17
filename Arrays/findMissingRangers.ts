// You are given an inclusive range [lower, upper] and a sorted unique integer array nums,
//  where all elements are within the inclusive range.
// A number x is considered missing if x is in the range [lower, upper] and x is not in nums.

// Return the shortest sorted list of ranges that exactly covers all the missing numbers.
// That is, no element of nums is included in any of the ranges, and each missing number is
// covered by one of the ranges.

function findMissingRanges(
  nums: number[],
  lower: number,
  upper: number,
): number[][] {
  if (nums.length === 0) {
    return [[lower, upper]];
  }
  let res = [];

  const first = nums[0] - lower > 0 ? [lower, nums[0] - 1] : null;
  const last =
    upper - nums[nums.length - 1] > 0
      ? [nums[nums.length - 1] + 1, upper]
      : null;
  if (first) {
    res.push(first);
  }

  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];
    let prev = nums[i - 1];

    if (curr - prev > 1) {
      res.push([nums[i - 1] + 1, nums[i] - 1]);
    }
  }
  if (last) {
    res.push(last);
  }
  return res;
}

console.log(findMissingRanges([], 0, 99)); //[[0,99]]

console.log(findMissingRanges([0, 1, 3, 50, 75], 0, 99));
// [[2,2],[4,49],[51,74],[76,99]]

function findMissingRanges2(
  nums: number[],
  lower: number,
  upper: number,
): number[][] {
  const res: number[][] = [];
  let prev = lower - 1;

  for (let i = 0; i <= nums.length; i++) {
    const curr = i < nums.length ? nums[i] : upper + 1;

    if (curr - prev > 1) {
      res.push([prev + 1, curr - 1]);
    }

    prev = curr;
  }

  return res;
}
