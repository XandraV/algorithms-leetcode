// You are given an integer array nums.
// You want to maximize the number of points you get by performing the following operation
//  any number of times:
// Pick any nums[i] and delete it to earn nums[i] points.
// Afterwards, you must delete every element equal to nums[i] - 1 and
// every element equal to nums[i] + 1.
// Return the maximum number of points you can earn by applying the above
// operation some number of times.

function deleteAndEarn(nums: number[]): number {
  if (nums.length === 0) return 0;
  // Create points array where index represents the number and value represents total points
  // ie num * frequency
  const points = new Array(Math.max(...nums) + 1).fill(0);
  for (const num of nums) {
    points[num] += num;
  }
  // Base case
  points[0] = 0;
  points[1] = points[1];

  // House Robber DP in-place
  // since deleting i mean deleting i-1 and i+1
  // choosing points[i] means we cannot choose points[i-1] or points[i+1]
  for (let i = 2; i < points.length; i++) {
    points[i] = Math.max(points[i - 1], points[i - 2] + points[i]);
  }

  return points[points.length - 1];
}

console.log(deleteAndEarn([3, 4, 2])); // Output: 6
console.log(deleteAndEarn([2, 2, 3, 3, 3, 4])); // Output: 9
