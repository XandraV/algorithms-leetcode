// Given an array of intervals where intervals[i] = [starti, endi],
// merge all overlapping intervals,
// and return an array of the non-overlapping intervals that cover all the intervals in the input

function merge(intervals: number[][]): number[][] {
  const result = [];
  const sortedIntervals = intervals.sort((a, b) => a[0] - b[0]);

  let start = sortedIntervals[0][0];
  let end = sortedIntervals[0][1];

  for (let i = 1; i < sortedIntervals.length; i++) {
    const currentInterval = sortedIntervals[i];
    const currentStart = currentInterval[0];
    const currentEnd = currentInterval[1];

    if (currentStart <= end) {
      end = Math.max(currentEnd, end);
    } else {
      result.push([start, end]);
      start = currentStart;
      end = currentEnd;
    }
  }
  result.push([start, end]);
  return result;
}
// time complexity O(n log n) due to sorting
// space complexity O(n) for the result array

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
