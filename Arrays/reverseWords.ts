// Given an input string s, reverse the order of the words.

// A word is defined as a sequence of non-space characters.
// The words in s will be separated by at least one space.

// Return a string of the words in reverse order concatenated by a single space.

// Note that s may contain leading or trailing spaces or multiple spaces
// between two words. The returned string should only have a single space separating the words.
// Do not include any extra spaces.
function reverseWords(s: string): string {
  const words = s.trim().split(/\s+/);
  let left = 0;
  let right = words.length - 1;

  while (left < right) {
    [words[left], words[right]] = [words[right], words[left]];
    left++;
    right--;
  }

  return words.join(" ");
}

console.log(reverseWords("a good   example")); // "example good a"
