// 1423 Maximum Points You Can Obtain from Cards
// There are several cards arranged in a row,
// and each card has an associated number of points.
// The points are given in the integer array cardPoints.
// In one step, you can take one card from the beginning or
// from the end of the row. You have to take exactly k cards.
// Your score is the sum of the points of the cards you have taken.
// Given the integer array cardPoints and the integer k,
// return the maximum score you can obtain.

function maxScore(cardPoints: number[], k: number): number {
  const totalPoints = cardPoints.reduce((a, b) => a + b, 0); //O(n)
  const n = cardPoints.length;
  if (n == k) return totalPoints;

  // k cards max points -> n-k cards min points
  // look for s contigous subarray of length n-k with minimum points
  let minWindowSum = Infinity; // min point cards
  const windowSize = n - k;
  let windowSum = 0;

  for (let i = 0; i < cardPoints.length; i++) { //O(n)
    windowSum += cardPoints[i];

    if (i >= windowSize) {
      windowSum -= cardPoints[i - windowSize];
    }

    if (i >= windowSize - 1) {
      minWindowSum = Math.min(minWindowSum, windowSum);
    }
  }

  return totalPoints - minWindowSum;
}

const test = [11, 49, 100, 20, 86, 29, 72];
console.log(maxScore(test, 4)); // 12
