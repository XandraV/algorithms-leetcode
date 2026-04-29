// 522. Longest Uncommon Subsequence II

// Given an array of strings strs, return the length of the longest uncommon subsequence
//  between them. If the longest uncommon subsequence does not exist, return -1.
// An uncommon subsequence between an array of strings is a string that is a subsequence
// of one string but not the others.
// A subsequence of a string s is a string that can be obtained after deleting any number
//  of characters from s.
// For example, "abc" is a subsequence of "aebdc" because you can delete the underlined
//  characters in "aebdc" to get "abc". Other subsequences of "aebdc" include "aebdc", "aeb", and "" (empty string).

function findLUSlength(strs: string[]): number {
  // helper function to check if s is a subsequence of t
  function isSubsequence(s: string, t: string): boolean {
    let i = 0;
    for (let j = 0; j < t.length && i < s.length; j++) {
      if (s[i] === t[j]) i++;
    }
    return i === s.length;
  }

  let result = -1;
  // check each string in the array
  for (let i = 0; i < strs.length; i++) {
    let isUncommon = true;
    // check if the current string is a subsequence of any other string
    for (let j = 0; j < strs.length; j++) {
      // skip the same string and check if it's a subsequence of another string
      if (i !== j && isSubsequence(strs[i], strs[j])) {
        isUncommon = false;
        break;
      }
    }
    // if it's uncommon, update the result with the maximum length
    if (isUncommon) result = Math.max(result, strs[i].length);
  }
  return result;
}

console.log(findLUSlength(["aba", "cdc", "eae"])); // Output: 3
console.log(findLUSlength(["aaa", "aaa", "aa"])); // Output: -1
console.log(findLUSlength(["aabbcc", "aabbcc", "cb"])); // Output: 2
