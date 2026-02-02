// 11. Container With Most Water
// You are given an integer array height of length n.
// There are n vertical lines drawn such that the two endpoints of the ith
// line are (i, 0) and (i, height[i]).
// Find two lines that together with the x-axis form a container,
// such that the container contains the most water.
// Return the maximum amount of water a container can store.
// Notice that you may not slant the container.

// Two-pointer greedy strategy
// Start with the widest container and shrink it
// The only way to get a bigger area is to increase the height
function maxArea(height: number[]): number {
  // Start with the widest container:
  let left = 0;
  let right = height.length - 1;

  let max = 0;

  while (left < right) {
    // waterWidth is right - left
    // height is the minimum of the walls on the two sides
    const area = Math.min(height[left], height[right]) * (right - left);
    max = Math.max(max, area);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return max;
}
