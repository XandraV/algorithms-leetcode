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
console.log(findLongestString(shortStrs)); // "hey"
