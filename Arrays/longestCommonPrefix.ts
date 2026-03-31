function longestCommonPrefix(strs: string[]): string {
  let longest = "";
  let prefixes = [];

  for (let i = 0; i < strs[0].length; i++) {
    prefixes.push(strs[0].substring(0, i + 1));
  } // O(m^2) where m is the length of the first string

  for (let p of prefixes) {
    if (strs.every((word) => word.startsWith(p))) {
      longest = p;
    }
  }
  return longest;
}

console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"

function longestCommonPrefixOptimal(strs: string[]): string {
  if (strs.length === 0) return "";

  let prefix = strs[0];
  // Only trims the prefix until it matches the start of each string in the array.
  // If it doesn't match, it removes the last character and checks again.
  // Once it's a match then moves to the next string in the array
  // and repeats the process until it has checked all strings.
  for (let i = 1; i < strs.length; i++) {
    while (!strs[i].startsWith(prefix)) {
      prefix = prefix.slice(0, -1); // remove last character
      if (prefix === "") return "";
    }
  }

  return prefix;
}
// Time complexity: O(S), where S is the sum of all characters in all strings.
