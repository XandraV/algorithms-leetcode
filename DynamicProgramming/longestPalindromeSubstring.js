const longestPalindrome = (s) => {
  // Helper to check if a string is a palindrome
  function isPalindrome(str) {
    return str === str.split("").reverse().join("");
  }

  if (isPalindrome(s)) return s; // whole string is already a palindrome

  let longest = "";

  // Loop through each index as potential center
  for (let i = 0; i < s.length; i++) {
    // Check odd-length palindromes
    let left = i,
      right = i;
    // slice is excluding end index hence (left,right + 1) is the sub-string from index left to right
    while (
      left >= 0 &&
      right < s.length &&
      isPalindrome(s.slice(left, right + 1))
    ) {
      if (right - left + 1 > longest.length) {
        longest = s.slice(left, right + 1);
      }
      left--;
      right++;
    }

    // Check even-length palindromes.
    left = i; // 1 s[i] = b
    right = i + 1; // 2 s[1] = b
    while (
      left >= 0 &&
      right < s.length &&
      isPalindrome(s.slice(left, right + 1))
    ) {
      if (right - left + 1 > longest.length) {
        longest = s.slice(left, right + 1);
      }
      left--;
      right++;
    }
  }

  return longest;
};
