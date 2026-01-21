// You are painting a fence of n posts with k different colors.
// You must paint the posts following these rules:
// Every post must be painted exactly one color.
// There cannot be three or more consecutive posts with the same color.
// Given the two integers n and k, return the number of ways you can paint the fence.

function numWays(n: number, k: number): number {
  if (n === 0) return 0;
  if (n === 1) return k;

  // same[i] = number of valid ways to paint i posts
  // where post i has the same color as post i-1
  const same: number[] = new Array(n + 1).fill(0);
  // diff[i] = number of valid ways to paint i posts
  // where post i has a different color than post i−1
  const diff: number[] = new Array(n + 1).fill(0);

  same[1] = 0;
  diff[1] = k;

  same[2] = k;
  diff[2] = k * (k - 1);

  for (let i = 3; i <= n; i++) {
    // To have the same color at i and i-1, the previous pair must be different
    // To make post i the same color as post i−1 we copy the color of post i−1
    // This is only allowed if posts i−2 and i−1 were different which is exactly what diff[i - 1] is
    same[i] = diff[i - 1];
    // To have different colors at i and i-1, previous can be anything (same or diff)
    // we can choose any of (k - 1) colors
    diff[i] = (same[i - 1] + diff[i - 1]) * (k - 1);
  }

  return same[n] + diff[n];
}
