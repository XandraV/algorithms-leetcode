// Given an array of integers, all integers appear twice except one integer, could you quickly target it?

function findSingle(arr: number[]): number | undefined {
  let result = 0;
  for (const num of arr) {
    result ^= num; // XOR
  }
  return result;
}

console.log(10 ^ 3 ^ 3);
console.log(10 ^ 0);

// 10 = 2^3 + 2^1
// 1010
//    0
// ----- XOR
// 1010

const arr = [10, 2, 2, 1, 0, 0, 10];
console.log(findSingle(arr)); // 1

function findSingle2(arr: number[]): number | undefined {
  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];

    let temp = arr.toSpliced(i, 1);
    if (!temp.includes(curr)) {
      return curr;
    }
  }

  return undefined;
}

const arr2 = [10, 2, 2, 1, 0, 0, 10];
console.log(findSingle2(arr2)); // 1
