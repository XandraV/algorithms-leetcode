function removeDuplicates(arr) {
  const res = new Set(arr);
  return Array.from(res);
}

function removeDuplicates2(arr) {
  const myMap = new Map();

  for (let item of arr) {
    myMap.set(item, (myMap.get(item) || 0) + 1);
  }

  return Array.from(myMap.keys());
}

console.log("No Duplicates:");
console.log("Input: [1, 2, 3]");
console.log("Output: ", removeDuplicates([1, 2, 3]));

console.log("With Duplicates:");
console.log("Input: [1, 2, 2, 3, 3, 3]");
console.log("Output: ", removeDuplicates([1, 2, 2, 3, 3, 3]));

console.log("Mixed Types:");
console.log('Input: [1, "1", true, "true"]');
console.log("Output: ", removeDuplicates([1, "1", true, "true"]));

console.log("Empty Array:");
console.log("Input: []");
console.log("Output: ", removeDuplicates([]));

console.log("Single Element:");
console.log("Input: [1]");
console.log("Output: ", removeDuplicates([1]));
