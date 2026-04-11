// 852. Peak Index in a Mountain Array
// You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.
// Return the index of the peak element.
// Your task is to solve it in O(log(n)) time complexity.

function peakIndexInMountainArray(arr: number[]): number {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] < arr[mid + 1]) {
      // we are on the increasing slope
      left = mid + 1;
    } else {
      // we are on the decreasing slope (or at peak)
      right = mid;
    }
  }

  return left;
}

// function peakIndexInMountainArray(arr: number[]): number {
//     let max = 0;

//     let left = 0;
//     let right = arr.length - 1;
//     while (left <= right) {
//         max = Math.max(arr[left], arr[right], max)
//         left++;
//         right--;
//     }
//     return arr.indexOf(max)
// };
