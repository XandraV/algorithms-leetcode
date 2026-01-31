// works for unsorted arrays too
function removeDuplicates(nums: number[]): number {
  const memory = new Set<number>();
  let writeIdx = 0;
  let uniqueNum = 0;

  for (let i = 0; i < nums.length; i++) {
    if (!memory.has(nums[i])) {
      uniqueNum++;
      memory.add(nums[i]);
      nums[writeIdx] = nums[i];
      writeIdx++;
    } else {
      continue;
    }
  }

  return uniqueNum;
}

const nums = [1, 1, 2];
console.log(removeDuplicates(nums));
console.log(nums); //  [ 1, 2, 2]

function removeDuplicates2(nums: number[]): number {
  const res = new Set(nums);
  return Array.from(res).length;
}

// Remove Duplicates from Sorted Array
function removeDuplicates3(nums: number[]): number {
  if (nums.length === 0) {
    return 0;
  }

  let writePointer = 1;

  // readPointer is index of num in nums array
  // writePointer is index of the nums in the no-duplicates array ie it'll move
  // behind readPointer at some point
  for (let readPointer = 1; readPointer < nums.length; readPointer++) {
    if (nums[readPointer] !== nums[readPointer - 1]) {
      nums[writePointer] = nums[readPointer];
      writePointer++;
    }
  }
  // to remove duplicates remove everything after writePointer nums.slice(0,writePointer)
  return writePointer;
}
