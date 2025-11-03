// Given an array of integers, find two number that sums up to 0, return their indices.
// There might be multiple pairs, any of them would do. If not found, return null

function findTwoSumZero(arr: number[]): number[][] {
  let res = [];
  let seen = new Set();
  for (let num of arr) {
    let target = -num;
    if (seen.has(target)) {
      res.push([num, target]);
    }
    seen.add(num);
  }

  return res;
}

function findTwoSumZeroIndices(arr: number[]): number[] | null {
  const seen = new Map<number, number>();

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    const target = -num;

    if (seen.has(target)) {
      return [seen.get(target)!, i];
    }

    seen.set(num, i);
  }

  return null; // returns null if not found
}
