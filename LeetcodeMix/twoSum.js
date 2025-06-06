// nums = [2,7,11,15]
// target = 9

// 9-2=7
// 9-7=2
// 9-11=-2
// 9-15=-6
function twoSum(nums, target) {
  let mp = new Map();

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (mp.has(diff)) {
      return [i, mp.get(diff)];
    }
    mp.set(nums[i], i);
  }
}
function twoSum2(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 9)); //[1,0]
