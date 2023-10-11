function separateNumbers(s) {
  if (s.split("").length < 3 || s.split("")[0] === "0")
    return console.log("NO");

  const maxDigits = Math.ceil(s.length / 2);
  console.log(maxDigits);

  let digitLength = 1;
  let firstNum = null;
  while (digitLength <= maxDigits) {
    firstNum = Number(s.split("").slice(0, digitLength).join(""));
    console.log(firstNum, digitLength);
    let temp = [firstNum];
    let i = 1;
    while (temp.join("").length < s.length) {
      temp.push(firstNum + i);
      i++;
    }
    console.log(temp);
    if (temp.join("") === s) {
      return console.log("YES " + firstNum);
    }
    digitLength++;
  }
  return console.log("NO");
}

separateNumbers("99100");
