// 1282. Group the People Given the Group Size They Belong To

// There are n people that are split into some unknown number of groups.
// Each person is labeled with a unique ID from 0 to n - 1.
//
// You are given an integer array groupSizes, where groupSizes[i] is
// the size of the group that person i is in. For example, if groupSizes[1] = 3,
// then person 1 must be in a group of size 3.

// Return a list of groups such that each person i is in a group of size groupSizes[i].
// Each person should appear in exactly one group, and every person must be in a group.
// If there are multiple answers, return any of them.
// It is guaranteed that there will be at least one valid solution for the given input.

// optimal solution, one pass
// Complexity: Time: O(n), Space: O(n)
function groupThePeople(groupSizes: number[]): number[][] {
  const res: number[][] = [];
  const freq = new Map<number, number[]>();
  for (let i = 0; i < groupSizes.length; i++) {
    let g = groupSizes[i];
    if (freq.has(g)) {
      freq.get(groupSizes[i])!.push(i);
    } else {
      freq.set(groupSizes[i], [i]);
    }

    let indices = freq.get(groupSizes[i])!;
    if (indices.length === g) {
      res.push(indices);
      freq.delete(g);
    }
  }

  return res;
}

console.log(groupThePeople([3, 3, 3, 3, 3, 1, 3])); // [ [ 0, 1, 2 ], [ 5 ], [ 3, 4, 6 ] ]

function groupThePeople2(groupSizes: number[]): number[][] {
  const res: number[][] = [];
  const freq = new Map<number, number[]>();
  for (let i = 0; i < groupSizes.length; i++) {
    let g = groupSizes[i];
    if (freq.has(g)) {
      freq.get(groupSizes[i])!.push(i);
    } else {
      freq.set(groupSizes[i], [i]);
    }
  }

  for (let [k, v] of freq.entries()) {
    let temp = [];
    for (let j = 0; j < v.length; j++) {
      temp.push(v[j]);
      if (temp.length === k) {
        res.push(temp);
        temp = [];
      }
    }
  }

  return res;
}
