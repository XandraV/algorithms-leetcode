// 658. Find K Closest Elements
// Given a sorted integer array arr, two integers k and x, return the k closest integers to x in the array.
// The result should also be sorted in ascending order.

// An integer a is closer to x than an integer b if:
// |a - x| < |b - x|, or
// |a - x| == |b - x| and a < b

// suboptimal but works
function findClosestElements(arr: number[], k: number, x: number): number[] {
  // find insertion point via binary search, left will be the idx of x
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < x) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  // expand to k closest elements
  let l = left - 1;
  let r = left; // start with the target element as it has to be included in the result
  const result: number[] = [];
  while (result.length < k) {
    // let rightVal = arr[r];
    // let leftVal = arr[l];
    if (l < 0) {
      result.push(arr[r]); // right is always poushed to the end
      r++;
    } else if (r > arr.length - 1) {
      result.unshift(arr[l]); // l is always added to the front as we're asked to resturn results in order
      l--;
    } else if (Math.abs(arr[l] - x) <= Math.abs(arr[r] - x)) {
      result.unshift(arr[l]);
      l--;
    } else {
      result.push(arr[r]);
      r++;
    }
  }

  return result;
}

console.log(findClosestElements([1, 1, 2, 3, 4, 5], 4, -1)); //[1,1,2,3]
console.log(findClosestElements([1, 1, 2, 3, 4, 5], 4, -1)); //[1,1,2,3]
console.log(findClosestElements([1, 2, 3, 4, 5], 4, 3)); // [1,2,3,4]

// optimal: building result dynamically, just track window and slice at the end.
function findClosestElements2(arr: number[], k: number, x: number): number[] {
  let left = 0,
    right = arr.length - 1;

  // shrink window until size = k
  while (right - left + 1 > k) {
    console.log(arr[left], x, arr[right]);
    if (Math.abs(arr[left] - x) > Math.abs(arr[right] - x)) {
      left++;
    } else {
      right--;
    }
  }

  return arr.slice(left, right + 1);
}

console.log(findClosestElements2([1, 1, 6, 7, 8, 9, 10], 3, 6)); //[1,1,2,3]
console.log(findClosestElements([1, 1, 6, 7, 8, 9, 10], 3, 6)); //[1,1,2,3]
