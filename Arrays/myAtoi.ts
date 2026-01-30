function myAtoi(s: string): number {
  const arr = s.trim().split("");
  let res: string = "";
  let sign: string = "";

  for (let i = 0; i < arr.length; i++) {
    let char = arr[i];

    if (i === 0 && ["-", "+"].includes(char)) {
      sign = char;
      continue;
    }

    // compares Unicode/ASCII values
    if (char < "0" || char > "9") {
      break;
    }

    res += char;
  }

  if (res === "") return 0;

  let num = Number(sign + res);

  // clamp 32-bit signed integer
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  if (num < INT_MIN) return INT_MIN;
  if (num > INT_MAX) return INT_MAX;

  return num;
}

console.log(myAtoi("   -42")); // -42
console.log(myAtoi("4193 with words")); // 4193
console.log(myAtoi("words and 987")); // 0
console.log(myAtoi("-91283472332")); // -2147483648
console.log(myAtoi("3.14159")); // 3
console.log(myAtoi("+1"));
