// Given a character array s, reverse the order of the words.
// A word is defined as a sequence of non-space characters.
// The words in s will be separated by a single space.
// Your code must solve the problem in-place, i.e. without allocating extra space.f

function reverseWords2(words: string[]): void {
  reverse2(words, 0, words.length - 1);

  let start = 0;
  for (let i = 0; i <= words.length; i++) {
    if (i === words.length || words[i] === " ") {
      reverse2(words, start, i - 1);
      start = i + 1;
    }
  }
}

function reverse2(arr: string[], left: number, right: number): void {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

let res = [
  "t",
  "h",
  "e",
  " ",
  "s",
  "k",
  "y",
  " ",
  "i",
  "s",
  " ",
  "b",
  "l",
  "u",
  "e",
];
reverseWords2(res);
res;
