// 253 Meeting Rooms II
// Given an array of meeting time intervals intervals where intervals[i] = [starti, endi],
// return the minimum number of conference rooms required.

function minMeetingRooms(intervals: number[][]): number {
  const starts = intervals.map((time) => time[0]).sort((a, b) => a - b);
  const ends = intervals.map((time) => time[1]).sort((a, b) => a - b);

  let left = 0;
  let rooms = 0;

  for (let i = 0; i < intervals.length; i++) {
    if (starts[i] < ends[left]) {
      rooms++;
    } else {
      left++;
    }
  }

  return rooms;
}

console.log(
  minMeetingRooms([
    [0, 30],
    [5, 10],
    [15, 20],
  ]),
); // 2
