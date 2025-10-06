function isPalindrome(s) {
  const rs = s.split("").reverse().join("");
  console.log(s === rs);
  return s === rs;
}

function isPalindrome2(s) {
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
