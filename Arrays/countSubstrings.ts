// 647. Palindromic Substrings
// Given a string s, return the number of palindromic substrings in it.
// A string is a palindrome when it reads the same backward as forward.
// A substring is a contiguous sequence of characters within the string.

// reduce the time for palindromic checks to O(1) by reusing some previous computation
function countSubstrings(s: string): number {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    // ODD palindrome
    let left = i;
    let right = i;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }

    // EVEN palindrome
    left = i;
    right = i + 1;
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      count++;
      left--;
      right++;
    }
  }

  return count;
}
