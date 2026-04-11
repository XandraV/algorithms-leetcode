function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const midPoint = Math.floor((left + right) / 2);

    // if mid is bigger than right side
    // move towards the right side
    if (nums[right] < nums[midPoint]) {
      left = midPoint + 1;
    } else {
      // else nums[right] is greater than mid
      // we move left by setting right pointer to mid
      right = midPoint;
    }
  }

  return nums[left];
}
