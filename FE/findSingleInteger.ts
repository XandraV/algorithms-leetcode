// Find the integer in an array of integers that appears only once.
function findSingle(arr: number[]): number | undefined {
  let result = 0;
  for (const num of arr) {
    result ^= num; // XOR
  }
  return result;
}

console.log(10 ^ 3 ^ 3);
console.log(10 ^ 0);

// All paris cancel out eg.:
// 10 ^ 10 = 0
// 2 ^ 2 = 0

// 10 ^ 2 ^ 2 ^ 1 ^ 0 ^ 0 ^ 10
// = (10 ^ 10) ^ (2 ^ 2) ^ (0 ^ 0) ^ 1
// = 0 ^ 0 ^ 0 ^ 1
// = 1

const arr = [10, 2, 2, 1, 0, 0, 10];
console.log(findSingle(arr)); // 1

function findSingle2(arr: number[]): number | undefined {
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i]; // fix the curr variable

    // create a new array without the current element
    let temp = arr.toSpliced(i, 1);
    if (!temp.includes(curr)) {
      // check if the new array includes the current element
      return curr;
    }
  }

  return undefined;
}

const arr2 = [10, 2, 2, 1, 0, 0, 10];
console.log(findSingle2(arr2)); // 1
