function itemInCommon(array1: number[], array2: number[]) {
  // Create a new Map object to store items from the first array (array1).
  const myMap = new Map(); //implemented as a hash table internally with minimal collisions
  for (let i of array1) {
    myMap.set(i, true);
  }

  // go through every item in the second array
  for (let j of array2) {
    if (myMap.has(j)) {
      return true;
    }
  }

  // If no common items were found return false
  return false;
}
