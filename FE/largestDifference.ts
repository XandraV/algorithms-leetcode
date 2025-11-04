function largestDiff(arr: number[]): number {
  let largestDiff = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let curr = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      let next = arr[j];
      largestDiff = Math.max(largestDiff, Math.abs(curr - next));
    }
  }
  return largestDiff;
}

function largestDiff2(arr: number[]): number {
  if (arr.length === 0) return 0;
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    min = Math.min(min, arr[i]);
    max = Math.max(max, arr[i]);
  }
  return Math.abs(max - min);
}

console.log(largestDiff([-1, 2, 3, 10, 9])); // 11
// 11 as min is -1 and max is 10, abs(-1 - 10) = 11
console.log(largestDiff2([])); // 0
console.log(largestDiff2([1])); // 0
