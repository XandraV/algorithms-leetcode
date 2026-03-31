// 57. Insert Interval
// You are given an array of non-overlapping intervals intervals where
// intervals[i] = [starti, endi] represent the start and the end of the ith interval
// and intervals is sorted in ascending order by starti.
// You are also given an interval newInterval = [start, end] that represents
//  the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted
// in ascending order by starti and intervals still does not have any overlapping
//  intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

// Note that you don't need to modify intervals in-place.
// You can make a new array and return it.

function insert(intervals: number[][], newInterval: number[]): number[][] {
  let result = [];
  let inserted = false;

  for (let i = 0; i < intervals.length; i++) {
    const [currStart, currEnd] = intervals[i];

    // if current interval is before newInterval, add it to result
    if (currEnd < newInterval[0]) {
      result.push([currStart, currEnd]);
    } else if (newInterval[1] < currStart) {
      // if current interval is after newInterval, add newInterval to result (if not already added) and then add current interval
      if (!inserted) {
        result.push(newInterval);
        inserted = true;
      }
      result.push([currStart, currEnd]);
    } else {
      // if current interval overlaps with newInterval, merge them by updating newInterval to include both
      newInterval[0] = Math.min(currStart, newInterval[0]);
      newInterval[1] = Math.max(currEnd, newInterval[1]);
    }
  }

  // if newInterval was not added to result yet - overlaps intervals till the end,
  // then add it now
  if (!inserted) {
    result.push(newInterval);
  }

  return result;
}

const intervals = [
    [1, 3],
    [6, 9],
  ],
  newInterval = [2, 5];

console.log(insert(intervals, newInterval));
// [  [1, 5],  [6, 9],];
