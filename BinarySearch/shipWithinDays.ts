// 1011. Capacity To Ship Packages Within D Days
// A conveyor belt has packages that must be shipped from one port to another within days days.
// The ith package on the conveyor belt has a weight of weights[i].
// Each day, we load the ship with packages on the conveyor belt
// (in the order given by weights). We may not load more weight
// than the maximum weight capacity of the ship.
// Return the least weight capacity of the ship that will result in all
// the packages on the conveyor belt being shipped within days days.

function shipWithinDays(weights: number[], days: number): number {
  const totalPackages = weights.reduce((a, b) => a + b, 0);

  function daysNeed(packagesPerDay: number): number {
    let days = 1;
    let currentLoad = 0;
    for (let weight of weights) {
      if (currentLoad + weight > packagesPerDay) {
        days++;
        currentLoad = 0;
      }
      currentLoad += weight;
    }
    return days;
  }

  let left = Math.max(...weights);
  let right = totalPackages;

  while (left < right) {
    let mid = Math.floor((right + left) / 2);

    let daysNeedToShipAll = daysNeed(mid);

    if (daysNeedToShipAll <= days) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return left;
}
// O(n)+O(logM) = O(n log M) where n = number of packages, M = sum of all weights

const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(shipWithinDays(test, 5)); // 15
