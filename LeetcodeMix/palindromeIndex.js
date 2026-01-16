// Given a string of lowercase letters in the range ascii[a-z],
// determine the index of a character that can be removed to make the string a palindrome.
// There may be more than one solution, but any will do. If the word is already a
// palindrome or there is no solution, return -1. 
// Otherwise, return the index of a character to remove.
function isPalindrome(s) {
  return s.split("").reverse().join("") === s;
}

function palindromeIndex(s) {
  if (isPalindrome(s)) return -1;

  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    // O(n)
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      if (isPalindrome(s.slice(left + 1, right + 1))) {
        return left;
      } else if (isPalindrome(s.slice(left, right))) {
        return right;
      } else {
        return -1;
      }
    }
  }

  return 0;
}

console.log(palindromeIndex("aaab"));
