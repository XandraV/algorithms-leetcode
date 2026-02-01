// This function finds all the pairs of numbers that
// sum up to a given target.
// One number is taken from arr1 and the other from
// arr2.
function findPairs(arr1: number[], arr2: number[], target: number) {
  const mySet = new Set();
  const pairs = [];

  for (const num of arr1) {
    mySet.add(num);
  }

  for (const num of arr2) {
    const complement = target - num;
    if (mySet.has(complement)) {
      pairs.push([complement, num]);
    }
  }

  return pairs;
}

console.log(findPairs([1, 2, 3], [4, 5, 6], 7));
console.log(findPairs([1, 2, 3], [7, 6, 5], 8));
