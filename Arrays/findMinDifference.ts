// Given a list of 24-hour clock time points in "HH:MM" format,
// return the minimum minutes difference between any two time-points in the list.

function findMinDifference(timePoints: string[]): number {
  const times: number[] = timePoints.map(
    (time: string) =>
      Number(time.split(":")[1]) + Number(time.split(":")[0]) * 60
  );

  times.sort((a, b) => a - b);
  console.log(times);
  const twentyfour =
    Number("24:00".split(":")[1]) + Number("24:00".split(":")[0]) * 60;

  let minDiff = Infinity;
  for (let i = 0; i < times.length - 1; i++) {
    let temp = times[i + 1] - times[i];
    minDiff = Math.min(minDiff, temp);
  }

  // Check the difference between the last and first time points
  // as they might be 00:00 and 23:59 and have a smaller difference
  // e.g., 23:59 -> 1439 and 00:00 -> 0 hence their difference would be 0
  // which is incorrect. So we calculate the circular difference
  // = 24:00->1440 - last + first = 1440 - 1439 + 0 = 1
  const last = times[times.length - 1];
  const first = times[0];
  const diff = twentyfour - last + first;
  minDiff = Math.min(minDiff, diff);
  return minDiff;
}

const timePoints = ["02:39", "10:26", "21:43"];
console.log(findMinDifference(timePoints)); // 296
