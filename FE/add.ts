// 1️⃣ extract signs and split into int + frac
// 2️⃣ pad fractional and integer parts to same length
// 3️⃣ if same sign → resultSign = sign1, use addAbs()
// 4️⃣ if diff sign → use compareAbs() and subAbs()
// 5️⃣ combine int + frac, clean up zeros
// 6️⃣ apply resultSign
// 7️⃣ return result;

function add(num1: string, num2: string): string {
  // --- Step 1: Extract signs and normalize ---
  let sign1 = num1.startsWith("-") ? -1 : 1;
  let sign2 = num2.startsWith("-") ? -1 : 1;
  num1 = num1.replace(/^[+-]/, "");
  num2 = num2.replace(/^[+-]/, "");

  // --- Step 2: Split into integer and fractional parts ---
  let [int1, frac1 = ""] = num1.split(".");
  let [int2, frac2 = ""] = num2.split(".");

  // --- Step 3: Pad fractional parts (to same length) ---
  const maxFracLen = Math.max(frac1.length, frac2.length);
  frac1 = frac1.padEnd(maxFracLen, "0");
  frac2 = frac2.padEnd(maxFracLen, "0");

  // --- Step 4: Pad integer parts (to same length) ---
  const maxIntLen = Math.max(int1.length, int2.length);
  int1 = int1.padStart(maxIntLen, "0");
  int2 = int2.padStart(maxIntLen, "0");

  // --- Step 5: Combine for easier addition/subtraction ---
  const a = int1 + frac1;
  const b = int2 + frac2;

  // helper to compare absolute magnitudes
  // a > b = 1
  // a == b = 0
  // a < b = -1
  const compareAbs = (a: string, b: string) => {
    if (a.length !== b.length) return a.length - b.length;
    return a.localeCompare(b);
  };

  // helper to add absolute values
  const addAbs = (a: string, b: string) => {
    let carry = 0;
    let res = "";
    for (let i = a.length - 1; i >= 0; i--) {
      const sum = Number(a[i]) + Number(b[i]) + carry;
      res = (sum % 10) + res; // prepend remainder(%) to result
      carry = Math.floor(sum / 10);
    }
    // if there's still carry left at the end of the loop, add it to result
    if (carry) res = carry + res;
    return res;
  };

  // helper to subtract |a| - |b|, assuming |a| >= |b|
  const subAbs = (a: string, b: string) => {
    let borrow = 0;
    let res = "";
    for (let i = a.length - 1; i >= 0; i--) {
      let diff = Number(a[i]) - Number(b[i]) - borrow;
      if (diff < 0) {
        diff += 10;
        borrow = 1;
      } else {
        borrow = 0;
      }
      res = diff + res;
    }
    return res.replace(/^0+/, "") || "0";
  };

  // --- Step 6: Compute ---
  let result = "";
  let resultSign = 1;

  if (sign1 === sign2) {
    // signs are same
    result = addAbs(a, b);
    resultSign = sign1;
  } else {
    // signs are different
    const cmp = compareAbs(a, b);
    if (cmp === 0) return "0"; // if a and b are the same and signs are different
    if (cmp > 0) {
      // if a greater than b, subtract b from a, sign is equal to sign of a
      result = subAbs(a, b);
      resultSign = sign1;
    } else {
      // else b is greater than a, subtract a from b, sign is equal to sign of b
      result = subAbs(b, a);
      resultSign = sign2;
    }
  }

  // --- Step 7: Reinsert decimal point ---
  let intPart = result;
  let fracPart = "";

  if (maxFracLen > 0) {
    intPart = result.slice(0, result.length - maxFracLen) || "0";
    fracPart = result.slice(-maxFracLen).replace(/0+$/, ""); // trim trailing zeros
  }

  // --- Step 8: Clean up leading zeros and apply sign ---
  intPart = intPart.replace(/^0+(\d)/, "$1") || "0";
  let final = fracPart ? `${intPart}.${fracPart}` : intPart;
  if (resultSign === -1 && final !== "0") final = "-" + final;

  return final;
}

console.log(add("-999999999999999999", "-1"));
// '-1000000000000000000'

console.log(
  add(
    "-999999999999999999.999999999999999999999999999999",
    "1.0000000000000000000000000001"
  )
);
// '-999999999999999998.999999999999999999999999999899'

console.log(
  add(
    "999999999999999999.9999999999999999999999999999",
    "1.0000000000000000000000000001"
  )
);
// '1000000000000000001'
