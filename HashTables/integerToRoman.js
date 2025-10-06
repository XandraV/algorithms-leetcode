/**
 * Seven different symbols represent Roman numerals with the following values:

Symbol	| Value
----------------
 I	    | 1
 V	    | 5
 X	    | 10
 L	    | 50
 C	    | 100
 D	    | 500
 M	    | 1000
Roman numerals are formed by appending the conversions of decimal place values
from highest to lowest. Converting a decimal place value into a Roman numeral 
has the following rules:
If the value does not start with 4 or 9, select the symbol of the maximal value
that can be subtracted from the input, append that symbol to the result, 
subtract its value, and convert the remainder to a Roman numeral.
If the value starts with 4 or 9 use the subtractive form representing 
one symbol subtracted from the following symbol, for example, 4 is 1 (I) 
less than 5 (V): IV and 9 is 1 (I) less than 10 (X): IX. 
Only the following subtractive forms are used: 4 (IV), 9 (IX), 40 (XL), 90 (XC), 400 (CD) and 900 (CM).
Only powers of 10 (I, X, C, M) can be appended consecutively at most 3 times
to represent multiples of 10. You cannot append 5 (V), 50 (L), or 500 (D) multiple times.
If you need to append a symbol 4 times use the subtractive form.
Given an integer, convert it to a Roman numeral.
 */

// 11ms runtime
const intToRoman = function (num) {
  let value = num;
  let roman = "";

  const mapToRoman = new Map();
  mapToRoman.set(1000, "M");
  mapToRoman.set(900, "CM");
  mapToRoman.set(500, "D");
  mapToRoman.set(400, "CD");
  mapToRoman.set(100, "C");
  mapToRoman.set(90, "XC");
  mapToRoman.set(50, "L");
  mapToRoman.set(40, "XL");
  mapToRoman.set(10, "X");
  mapToRoman.set(9, "IX");
  mapToRoman.set(5, "V");
  mapToRoman.set(4, "IV");
  mapToRoman.set(1, "I");

  while (value > 0) {
    if (value >= 1000) {
      roman += mapToRoman.get(1000);
      value -= 1000;
    } else if (value >= 900) {
      roman += mapToRoman.get(900);
      value -= 900;
    } else if (value >= 500) {
      roman += mapToRoman.get(500);
      value -= 500;
    } else if (value >= 400) {
      roman += mapToRoman.get(400);
      value -= 400;
    } else if (value >= 100) {
      roman += mapToRoman.get(100);
      value -= 100;
    } else if (value >= 90) {
      roman += mapToRoman.get(90);
      value -= 90;
    } else if (value >= 50) {
      roman += mapToRoman.get(50);
      value -= 50;
    } else if (value >= 40) {
      roman += mapToRoman.get(40);
      value -= 40;
    } else if (value >= 10) {
      roman += mapToRoman.get(10);
      value -= 10;
    } else if (value >= 9) {
      roman += mapToRoman.get(9);
      value -= 9;
    } else if (value >= 5) {
      roman += mapToRoman.get(5);
      value -= 5;
    } else if (value >= 4) {
      roman += mapToRoman.get(4);
      value -= 4;
    } else {
      roman += mapToRoman.get(1);
      value -= 1;
    }
  }

  return roman;
};

// 9ms runtime
const intToRoman2 = function (num) {
  let roman = "";

  const mapToRoman = new Map();
  mapToRoman.set(1000, "M");
  mapToRoman.set(900, "CM");
  mapToRoman.set(500, "D");
  mapToRoman.set(400, "CD");
  mapToRoman.set(100, "C");
  mapToRoman.set(90, "XC");
  mapToRoman.set(50, "L");
  mapToRoman.set(40, "XL");
  mapToRoman.set(10, "X");
  mapToRoman.set(9, "IX");
  mapToRoman.set(5, "V");
  mapToRoman.set(4, "IV");
  mapToRoman.set(1, "I");

  for (let [val, sym] of mapToRoman) {
    while (num >= val) {
      const multiple = Math.floor(num / val);
      num -= val * multiple;
      roman += sym.repeat(multiple);
    }
  }

  return roman;
};

// 4ms runtime - array lookup is cheaper than map.get() due to its hashing/collisions etc
const intToRoman3 = function (num) {
  let roman = "";

  const values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

  const symbols = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  for (let i = 0; i < values.length; i++) {
    const multiple = Math.floor(num / values[i]);
    num -= values[i] * multiple;
    roman += symbols[i].repeat(multiple);
  }
  return roman;
};

console.log(
  "3749 should be converted to MMMDCCXLIX, convertion:",
  intToRoman3(3749)
);

console.log("400 should be converted to CD, convertion:", intToRoman3(400));

console.log("400 should be converted to CDI, convertion:", intToRoman3(401));
