// 2594. Minimum Time to Repair Cars
// You are given an integer array ranks representing the ranks of some mechanics.
// ranksi is the rank of the ith mechanic. A mechanic with a rank r can repair n cars in r * n2 minutes.
// You are also given an integer cars representing the total number of cars waiting in
// the garage to be repaired.

// Return the minimum time taken to repair all the cars.
// Note: All the mechanics can repair the cars simultaneously.

function repairCars(ranks: number[], cars: number): number {
  // Each mechanic with rank r can repair:
  // r * n^2 ≤ T
  // Solve for n:
  // n^2 ≤ T / r
  // n ≤ sqrt(T / r)
  // So each mechanic can fix:
  // Math.floor(Math.sqrt(T / r)) cars within time T.

  // canFinish(T): boolean function
  // For each mechanic: compute how many cars they can fix in time T
  // Sum them up and check: totalCars >= cars

  // Search space for binary search on time
  // min -> left = 0
  // max -> worst case: slowest mechanic does everything:
  // right = minRank * cars^2

  const minRank = Math.min(...ranks);
  function canFinish(T: number): boolean {
    let total = 0;
    for (let r of ranks) {
      total += Math.floor(Math.sqrt(T / r));
      if (total >= cars) return true;
    }
    return false;
  }

  // Binary search
  // we want to find the smallest T such that canFinish(T) is true
  let left = 0;
  let right = minRank * cars * cars;
  while (left < right) {
    let mid = Math.floor((left + right) / 2);

    if (canFinish(mid)) {
      // try smaller
      right = mid;
    } else {
      // need more time
      left = mid + 1;
    }
  }
  return left;
}
// ranks = [4,2,3,1], cars = 10
// Output: 16

// O(n log(cars^2)) but because of log scale O(n log(cars)) - also log(maxTime=cars^2)
