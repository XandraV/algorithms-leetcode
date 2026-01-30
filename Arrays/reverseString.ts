// Write a function that reverses a string by modifying the input array in-place with O(1) extra memory.
function reverseString(s: string[]): void {
  for (let i = 0, j = s.length - 1; i < j; i++, j--) {
    let temp = s[i];
    s[i] = s[j];
    s[j] = temp;
  }
}
const s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s);
