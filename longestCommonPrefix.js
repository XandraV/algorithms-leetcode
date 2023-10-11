const test = ["flower", "flow", "floight"];

function longestCommonPrefix(strs) {
  let longestPrefix = "";
  let temp = [];
  for (let i = 0; i < strs[0].length; i++) {
    temp.push(strs[0].substring(0, i + 1));
  }
  for (let j of temp) {
    if (
      strs.every(
        (item) =>
          item.substring(0, j.length) === j && j.length > longestPrefix.length
      )
    ) {
      longestPrefix = j;
    }
  }
  return longestPrefix;
}

console.log(longestCommonPrefix(test));
