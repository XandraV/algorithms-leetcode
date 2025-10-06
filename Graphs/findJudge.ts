/**
In a town, there are n people labeled from 1 to n. 
There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:
- The town judge trusts nobody.
- Everybody (except for the town judge) trusts the town judge.
- There is exactly one person that satisfies properties 1 and 2.

You are given an array trust where trust[i] = [ai, bi] representing 
that the person labeled ai trusts the person labeled bi. 
If a trust relationship does not exist in trust array, 
then such a trust relationship does not exist.

Return the label of the town judge if the town judge exists and 
can be identified, or return -1 otherwise.
 */
function findJudge(n: number, trust: number[][]): number {
  if (n === 1) return 1;
  if (trust.length == 0 && n > 1) return -1;
  const numOfTrusts = new Map();

  for (const [_, b] of trust) {
    if (numOfTrusts.has(b)) {
      numOfTrusts.set(b, numOfTrusts.get(b) + 1);
    } else {
      numOfTrusts.set(b, 1);
    }
  }

  for (const [key, value] of numOfTrusts) {
    if (value === n - 1 && !trust.some(([a]) => a === key)) {
      return key;
    }
  }
  return -1;
}

function findJudgeOptimised(n: number, trust: number[][]): number {
  if (n === 1) return 1;
  if (trust.length === 0 && n > 1) return -1;

  const inDegree = new Array(n + 1).fill(0);
  const outDegree = new Array(n + 1).fill(0);

  for (const [a, b] of trust) {
    outDegree[a]++; // a trusts someone
    inDegree[b]++; // b is trusted by someone
  }

  for (let i = 1; i <= n; i++) {
    if (inDegree[i] === n - 1 && outDegree[i] === 0) {
      return i; // judge found
    }
  }
  return -1;
}
