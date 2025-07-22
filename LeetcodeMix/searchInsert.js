//Given a sorted array of distinct integers and a target value,
// return the index if the target is found.
// If not, return the index where it would be
// if it were inserted in order.

// Binary search
function searchInsert(nums, target) {
  let lo = 0,
    hi = nums.length; // we might need to insert at the end
  while (lo < hi) {
    // breaks if lo == hi
    let mid = lo + Math.floor((hi - lo) / 2);
    if (target > nums[mid]) {
      lo = mid + 1; 
    } else {
      hi = mid; 
    }
  }
  return lo;
}

console.log(searchInsert([1, 5, 6, 9, 14], 12));
