// This function finds the longest string in an
// array of strings stringArray
function findLongestString(arr: string[]) {
  let longestString = "";

  for (let item of arr) {
    if (item.length > longestString.length) {
      longestString = item;
    }
  }

  return longestString;
}

let shortStrs = ["hi", "yo", "hey"];
console.log("Test array with short strings:");
console.log("Longest String:", findLongestString(shortStrs)); // "hey"

let longStrs = ["hello", "goodbye", "supercalifragilisticexpialidocious"];
console.log("Longest String:", findLongestString(longStrs)); // "supercalifragilisticexpialidocious"

let variedStrs = ["short", "longer", "longest"];
console.log("Longest String:", findLongestString(variedStrs)); //  "longest"

let sameStrs = ["same", "size", "test"];
console.log("Longest String:", findLongestString(sameStrs)); // Should print: "same" (or "size" or "test")
