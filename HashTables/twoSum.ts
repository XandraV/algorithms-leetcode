// returns indices of the two numbers such that they add up to target
function twoSum(nums: number[], target: number) {
  // Map<num, idx>
  let numMap = new Map<Number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const complement = target - num;
    // check if the complement of the current num
    // already exists in our map
    if (numMap.has(complement)) {
      return [numMap.get(complement), i];
    }
    //  let complIdx = numMap.get(complement)
    //     if (complIdx !== undefined) {
    //         return [complIdx, i]
    //     }
    numMap.set(num, i);
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); //[1,0]
