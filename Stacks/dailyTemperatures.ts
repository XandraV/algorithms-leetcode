// Given an array of integers temperatures represents the daily temperatures,
// return an array answer such that answer[i] is the number of days
// you have to wait after the ith day to get a warmer temperature.
// If there is no future day for which this is possible, keep answer[i] == 0 instead.

function dailyTemperatures(temperatures: number[]): number[] {
  const answer = new Array(temperatures.length).fill(0);
  const stack: number[] = [];

  for (let i = 0; i < temperatures.length; i++) {
    while (
      stack.length > 0 &&
      temperatures[stack[stack.length - 1]] < temperatures[i]
    ) {
      let prev = stack.pop()!;
      answer[prev] = i - prev;
    }
    stack.push(i);
  }

  return answer;
}

const temperatures = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(temperatures)); // [1,1,4,2,1,1,0,0]
