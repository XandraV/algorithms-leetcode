/*
Implement a generator function rangeGenerator that takes two arguments:
start and end and yields numbers in the range[start, end].

If start is greater than end, the generator should yield numbers in a reverse order.
*/
function* rangeGenerator(start, end) {
  let number = start;
  if (start === end) yield start;

  if (end > start) {
    while (number >= start && number <= end) {
      yield number++;
    }
  }

  if (end < start) {
    while (number >= end && number <= start) {
      yield number--;
    }
  }
}

// Ascending range
console.log([...rangeGenerator(1, 5)]); // Expected: [1, 2, 3, 4, 5]

// Descending range
console.log([...rangeGenerator(5, 1)]); // Expected: [5, 4, 3, 2, 1]

// Single value range
console.log([...rangeGenerator(3, 3)]); // Expected: [3]
