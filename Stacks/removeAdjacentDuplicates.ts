// 1209. Remove All Adjacent Duplicates in String II
// You are given a string s and an integer k, a k duplicate removal consists of choosing
// k adjacent and equal letters from s and removing them, causing the left and
// the right side of the deleted substring to concatenate together.
// We repeatedly make k duplicate removals on s until we no longer can.
// Return the final string after all such duplicate removals have been made.
// It is guaranteed that the answer is unique.

function removeDuplicates(s: string, k: number): string {
  // For each character:
  // If same as top → increase count
  // If different → push new entry
  // If count reaches k → remove it (pop)

  const stack: [string, number][] = [[s[0], 1]];

  for (let i = 1; i < s.length; i++) {
    let curr = s[i];
    if (stack.length !== 0 && stack[stack.length - 1][0] === curr) {
      stack[stack.length - 1][1]++;
      if (stack[stack.length - 1][1] === k) {
        stack.pop();
      }
    } else {
      stack.push([curr, 1]);
    }
  }

  return stack.map((char) => char[0].repeat(char[1])).join("");
}

console.log(removeDuplicates("deeedbbcccbdaa", 3)); // 'aa'
