// 93. Restore IP Addresses
// A valid IP address consists of exactly four integers separated by single dots.
// Each integer is between 0 and 255 (inclusive) and cannot have leading zeros.

// For example, "0.1.2.201" and "192.168.1.1" are valid IP addresses, but "0.011.255.245",
//  "192.168.1.312" and "192.168@1.1" are invalid IP addresses.
// Given a string s containing only digits, return all possible valid IP addresses
// that can be formed by inserting dots into s. You are not allowed to reorder or
// remove any digits in s. You may return the valid IP addresses in any order.

function restoreIpAddresses(s: string): string[] {
  const results: string[] = [];

  function backtrack(startIdx: number, path: string[]) {
    if (path.length >= 4 && startIdx < s.length) {
      return;
    }
    if (startIdx === s.length && path.length === 4) {
      results.push([...path].join("."));
      return;
    }

    for (let i = 1; i < 4; i++) {
      if (startIdx + i > s.length) {
        break;
      }
      // i = length of segment
      let segment = s.substring(startIdx, startIdx + i);
      if (
        isNaN(Number(segment)) ||
        Number(segment) < 0 ||
        Number(segment) > 255 ||
        (segment.length > 1 && segment[0] === "0")
      ) {
        break;
      }
      path.push(segment);
      backtrack(startIdx + i, path);
      path.pop();
    }
  }

  backtrack(0, []);

  return results;
}

console.log(restoreIpAddresses("25525511135")); // ["255.255.11.135","255.255.111.35"]
console.log(restoreIpAddresses("101023")); // ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]
