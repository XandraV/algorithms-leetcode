// Given n non-negative integers representing an elevation map where the width of each bar is 1,
// compute how much water it can trap after raining.

function trap(height: number[]): number {
  // left pointer starts at first bar;
  let left: number = 0;
  // right pointer starts at last bar
  let right: number = height.length - 1;
  // height at left
  let leftMax = height[left];
  // height at right
  let rightMax = height[right];
  let totalWater: number = 0;

  // At each iteration, compare height at left with height at right
  // Which side has the smaller wall? That side limits the water.
  while (left < right) {
    if (leftMax < rightMax) {
      left++;
      leftMax = Math.max(leftMax, height[left]);

      totalWater = totalWater + leftMax - height[left];
    } else {
      right--;
      rightMax = Math.max(rightMax, height[right]);

      totalWater = totalWater + rightMax - height[right];
    }
  }

  return totalWater;
}

console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]));
// 6
