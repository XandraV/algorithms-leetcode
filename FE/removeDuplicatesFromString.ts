function removeDuplicates(str: string) {
  let res = "";
  const s = new Set();

  for (let char of str) {
    if (s.has(char)) continue;

    res += char;
    s.add(char);
  }

  return res;
}

console.log(removeDuplicates("xyzabcxyzabc")); //xyzabc
