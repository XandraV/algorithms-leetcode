// check if palindrome - without converting to string
function isPalindrome(x) {
  let remainder = 0;
  let reverse = 0;
  let number = x;
  if (x < 0) {
    return false;
  }
  while (number !== 0) {
    remainder = number % 10;
    reverse = reverse * 10 + remainder;
    number = Math.floor(number / 10);
  }
  return x === reverse;
}

console.log(isPalindrome(12321));
