// 875. leetcode
// Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas.
// The guards have gone and will come back in h hours.
// Koko can decide her bananas-per-hour eating speed of k. Each hour,
// she chooses some pile of bananas and eats k bananas from that pile.
// If the pile has less than k bananas, she eats all of them instead and
// will not eat any more bananas during this hour.
// Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.
// Return the minimum integer k such that she can eat all the bananas within h hours.
function minEatingSpeed(piles: number[], h: number): number {
  function hoursNeeded(piles: number[], k: number): number {
    let hours = 0;
    for (let pile of piles) {
      hours += Math.ceil(pile / k); // hours needed to eat this pile given speed k
    }
    return hours;
  }
  // k is somewhere between 1 and number of bananas in largest pile
  // because she eats at least 1 banana per hour.
  // and eating more than the largest pile is pointless
  // Binary search for k in this range
  let left = 1;
  let right = 0;
  for (let pile of piles) {
    right = Math.max(pile, right);
  }

  while (left < right) {
    let mid = Math.floor((right + left) / 2);
    if (hoursNeeded(piles, mid) > h) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return left;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8)); // 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // 30
