// Its length is at least 6.
// It contains at least one digit.
// It contains at least one lowercase English character.
// It contains at least one uppercase English character.
// It contains at least one special character. The special characters are: !@#$%^&*()-+
// [a-z], [A-Z], [0-9], or [!@#$%^&*()-+ ]
function minimumNumber(n, password) {
  if (n === 3) return 3;
  // Return the minimum number of characters to make the password strong
  let hasDigit = false;
  let hasLowerCase = false;
  let hasUpperCase = false;
  let hasSpecialChar = false;
  if (password.match(/(\d+)/)) {
    hasDigit = true;
  }
  if (password.match(/([A-Z])/)) {
    hasUpperCase = true;
  }
  if (password.match(/([a-z])/)) {
    hasLowerCase = true;
  }
  if (password.match(/([!@#$%^&*()-+ ])/)) {
    hasSpecialChar = true;
  }
  const req = [hasDigit, hasLowerCase, hasUpperCase, hasSpecialChar];

  if (n < 3) {
    return 6 - n;
  } else if (n > 3) {
    const extraChar = 6 - n;
    if (extraChar < req.filter((item) => !item).length) {
      return req.filter((item) => !item).length;
    } else {
      return extraChar;
    }
  }
}

console.log(minimumNumber(11, "#HackerRank"));
