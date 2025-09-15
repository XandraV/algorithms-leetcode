// space complexity: O(1) - in place as no additional copies of the array
// is being created
// time complexity: O(n^2) - nested loops
function insertionSort(array) {
  let temp;
  for (let i = 1; i < array.length; i++) {
    temp = array[i];
    let j = i - 1;
    for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  return array;
}

function test() {
  let myArray = [4, 2, 6, 5, 1, 3];
  insertionSort(myArray);
  console.log(myArray);
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    [ 1, 2, 3, 4, 5, 6 ]

*/
