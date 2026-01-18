// You are given an integer array matches where matches[i] = [winneri, loseri]
// indicates that the player winneri defeated player loseri in a match.
// Return a list answer of size 2 where:
// answer[0] is a list of all players that have not lost any matches.
// answer[1] is a list of all players that have lost exactly one match.
// The values in the two lists should be returned in increasing order.
// Note:
// You should only consider the players that have played at least one match.
// The testcases will be generated such that no two matches will have the same outcome.
function findWinners(matches: number[][]): number[][] {
  const winners: number[] = [];
  const loosers: number[] = [];
  let losses = new Map<number, number>();

  for (let [winner, looser] of matches) {
    if (!losses.has(winner)) {
      losses.set(winner, 0);
    }

    losses.set(looser, (losses.get(looser) || 0) + 1);
    // losses.set(looser, (losses.get(looser) ?? 0) + 1);
  }

  for (let [player, loosCount] of losses) {
    if (loosCount === 0) {
      winners.push(player);
    } else if (loosCount === 1) {
      loosers.push(player);
    }
  }
  return [winners.sort((a, b) => a - b), loosers.sort((a, b) => a - b)]; // O(nlogn)
}
// nlogn term grows faster than n as n becomes large, so it dominates the total runtime
// hence the overall time complexity is O(nlogn)
// Space complexity is O(n) as we are storing data that grows with the input

console.log(
  findWinners([
    [1, 3],
    [2, 3],
    [3, 6],
    [5, 6],
    [5, 7],
    [4, 5],
    [4, 8],
    [4, 9],
    [10, 4],
    [10, 9],
  ])
); // [[1,2,10],[4,5,7,8]]
