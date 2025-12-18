function selectionSort(arr) {
  let min = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

let myArray = [4, 2, 6, 5, 1, 3];
selectionSort(myArray);
console.log(myArray); // [ 1, 2, 3, 4, 5, 6 ]
