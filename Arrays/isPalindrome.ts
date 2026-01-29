// Total time complexity: O(n) because of reverse method
// Space complexity: O(n) because of rs variable
function isPalindrome(s: string): boolean {
  const rs = s.split("").reverse().join("");
  console.log(s === rs);
  return s === rs;
}

// Time complexity: O(n) (but can stop early)
// Space complexity: O(1) (no extra string)
function isPalindrome2(s: string): boolean {
  let left = 0;
  let right = s.length - 1;

  while (left < right) {
    if (s[left] === s[right]) {
      left++;
      right--;
    } else {
      return false;
    }
  }

  return true;
}

console.log(isPalindrome("racecar"));
console.log(isPalindrome2("racecar"));

// Time complexity: O(n)
// Space complexity: O(n) (new array c)
function isPalindrome3(s: string): boolean {
  const c = s
    .replace(/[^a-zA-Z0-9]/g, "")
    .toLowerCase()
    .split("");

  for (let i = 0; i < c.length; i++) {
    if (!(c[i] == c[c.length - 1 - i])) return false;
  }

  return true;
}

console.log(isPalindrome("race a car")); // true
console.log(isPalindrome("race car")); // true
