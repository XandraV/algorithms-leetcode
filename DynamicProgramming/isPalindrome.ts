function isPalindrome(s: string): boolean {
  const rs = s.split("").reverse().join("");
  console.log(s === rs);
  return s === rs;
}

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
