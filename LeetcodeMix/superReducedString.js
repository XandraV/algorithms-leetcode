// Super Reduced String
function superReducedString(s) {
  let arr = s.split(""); // space complexity O(n)

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 2); // splice has O(n) space and time complexity
      i = -1;
      // need to set it to -1 as we increment by 1
      // and thenn get i=0 which is what we need after
      // removing the first 2 elements(pairs)
    }
  }

  return arr.length === 0 ? "Empty String" : arr.join("");
}

console.log(superReducedString("baab"));
