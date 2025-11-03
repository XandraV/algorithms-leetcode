// Given an unsorted array of integers which might have duplicates, return the top k integers in non-ascending order.

function topK(arr: number[], k: number): number[] {
  let stack = [];
  let minIndex = -1;

  for (let item of arr) {
    if (stack.length < k) {
      stack.push(item);
      minIndex = stack.indexOf(Math.min(...stack));
    } else {
      if (item > stack[minIndex]) {
        stack[minIndex] = item;
        minIndex = stack.indexOf(Math.min(...stack));
      }
    }
  }

  return stack.sort((a, b) => b - a);
}

console.log(topK([1, 10, 8, 9, 10, 2, 3, 4, 8, 8, 6], 4)); // [10,10,9,8]
console.log(
  topK([1, 2, 6, 9, 5, 9, 5, 1, 5, 2, 4, 1, 4, 5, 5, 4, 9, 6, 8, 6], 4)
); // [9,9,9,8]
