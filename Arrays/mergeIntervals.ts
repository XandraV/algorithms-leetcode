// Given an array of intervals where intervals[i] = [starti, endi],
// merge all overlapping intervals,
// and return an array of the non-overlapping intervals that cover all the intervals in the input

function merge(intervals: number[][]): number[][] {
  const result = [];
  const sorted = intervals.sort((a, b) => a[0] - b[0]); // O(n log n)

  let start = sorted[0][0];
  let end = sorted[0][1];

  // single pass to merge O(n)
  for (let i = 1; i < sorted.length; i++) {
    const [currStart, currEnd] = sorted[i];

    if (currStart > end) {
      result.push([start, end]);
      start = currStart;
      end = currEnd;
    } else {
      end = Math.max(end, currEnd);
    }
  }
  result.push([start, end]);
  return result;
}
// time complexity O(n log n) due to sorting
// space complexity O(n) for creating a result array → at most n intervals in worst case → O(n)

const intervals = [
  [1, 3],
  [2, 6],
  [8, 10],
  [15, 18],
];
const intervals2 = [
  [4, 7],
  [1, 4],
];
console.log(merge(intervals));
//[[1,6],[8,10],[15,18]]
console.log(merge(intervals2));
//[[1,7]]
