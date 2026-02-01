// This function checks if all the characters in a
// given string are unique.
function hasUniqueChars(str: string): boolean {
  const mySet = new Set();
  for (let item of str) {
    if (mySet.has(item)) {
      return false;
    }
    mySet.add(item);
  }

  return true;
}

console.log("Output: ", hasUniqueChars("abc")); // true

console.log("Output: ", hasUniqueChars("aabb")); //false
