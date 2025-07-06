// finds duplicate numbers in a list
// O(2n) time complexity which is just O(n) 
function findDuplicates(nums) {
  let numCounts = new Map();

  for (let num of nums) { // O(n) time complexity
    // create a map with the number as key and the count as value
    numCounts.set(num, (numCounts.get(num) || 0) + 1); // set and get both O(1) on average
  }

  const duplicates = [];
  // unique keys in numCounts is at most n
  // O(n) times in the worst case
  for (let [key, value] of numCounts.entries()) {
    // if the count is greater than 1, we have a duplicate
    // we push the key to the duplicates array
    if (value > 1) {
      duplicates.push(key); // O(1)
    }
  }

  return duplicates;
}
