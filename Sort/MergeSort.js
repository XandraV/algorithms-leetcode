function merge(array1, array2) {
  // new array to hold the combined result
  let combined = [];
  // two pointers to track current index of each array
  let i = 0;
  let j = 0;
  // while both arrays have elements left to compare
  while (i < array1.length && j < array2.length) {
    // compare the elements at the current pointers
    // push the smaller element to the combined array
    // move the pointer of the array from which the element was taken
    if (array1[i] < array2[j]) {
      combined.push(array1[i]);
      i++;
    } else {
      combined.push(array2[j]);
      j++;
    }
  }
  // if there are no more items in array2 j then we finish looping array1 with index i
  while (i < array1.length) {
    combined.push(array1[i]);
    i++;
  }
  // if there are no more items in array1 i then we finish looping array2 with index j
  while (j < array2.length) {
    combined.push(array2[j]);
    j++;
  }
  return combined;
}

// returns a separate new array with elements sorted
// space complexity is O(n) because we create new arrays when slicing
// time complexity is O(n log n) as we split the array in half log n times
// and each time we merge we have to look at every element n
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }
  // split array in half at the midpoint
  let midIndex = Math.floor(array.length / 2);
  // recursively sort left half and right half
  // ie slice it until we get 1 elements arrays which is the base case
  // then merge them back together in sorted order
  let left = mergeSort(array.slice(0, midIndex));
  let right = mergeSort(array.slice(midIndex));
  // then merge them back together in sorted order
  return merge(left, right);
}

function test() {
  let originalArray = [3, 1, 4, 2];
  let sortedArray = mergeSort(originalArray);

  console.log("Original Array:", originalArray);
  console.log("\nSorted Array:", sortedArray);
}

test();
//  Original Array: [ 3, 1, 4, 2 ]
//  Sorted Array: [ 1, 2, 3, 4 ]
