// 9ms runtime
// convert roman number to integer
const romanToInt = function (s) {
  let int = 0;

  const map = new Map();
  map.set("M", 1000);
  map.set("CM", 900);
  map.set("D", 500);
  map.set("CD", 400);
  map.set("C", 100);
  map.set("XC", 90);
  map.set("L", 50);
  map.set("XL", 40);
  map.set("X", 10);
  map.set("IX", 9);
  map.set("V", 5);
  map.set("IV", 4);
  map.set("I", 1);

  // Loop through the Roman string from left to right.
  // For each symbol in the map:
  // If its value is smaller than the next symbol’s value, subtract it.
  // Otherwise, add it.

  for (let i = 0; i < s.length; i++) {
    if (map.get(s[i]) < map.get(s[i + 1])) {
      int -= map.get(s[i]);
    } else {
      int += map.get(s[i]);
    }
  }

  return int;
};

console.log("III should be converted to 3, convertion:", romanToInt("III"));
