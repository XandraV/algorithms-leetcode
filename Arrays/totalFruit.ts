/**
 * LeetCode 904. Fruit Into Baskets
 *
 * You are visiting a farm that has a single row of fruit trees arranged from left to right.
 * The trees are represented by an integer array `fruits` where `fruits[i]` is the type of fruit
 * the `i`-th tree produces.
 *
 * You want to collect as much fruit as possible. However, the owner has some strict rules:
 * - You have only two baskets, and each basket can hold only one type of fruit.
 * - There is no limit on how many fruits each basket can hold.
 * - You can start collecting from any tree, and then must pick one fruit from every tree
 *   while moving to the right (you must move right in contiguous order).
 * - You must stop when you encounter a third fruit type that does not match either basket.
 *
 * Return the maximum number of fruits you can collect.
 *
 * Example:
 *   Input: fruits = [1,2,1]
 *   Output: 3
 *   Explanation: You can collect [1,2,1].
 *
 * Constraints:
 *   1 <= fruits.length <= 10^5
 *   0 <= fruits[i] < fruits.length
 */

// You cannot skip trees or jump around
// must take a continuous segment
// -> Longest contiguous subarray with at most 2 distinct numbers
// hence this is a sliding window problem

function totalFruit(fruits: number[]): number {
  let left = 0;
  const fruitCount: Map<number, number> = new Map();
  let longest = 0;
  // add fruit and increase count
  // when map.size > 2 shrink window till it's 2
  // then continue for loop ie extend to the right

  for (let right = 0; right < fruits.length; right++) {
    let curr = fruits[right];
    fruitCount.set(curr, (fruitCount.get(curr) ?? 0) + 1);

    while (fruitCount.size > 2) {
      let leftPointersFruit = fruits[left];
      fruitCount.set(leftPointersFruit, fruitCount.get(leftPointersFruit)! - 1);
      if (fruitCount.get(leftPointersFruit) === 0) {
        fruitCount.delete(leftPointersFruit);
      }
      left++;
    }
    longest = Math.max(longest, right - left + 1);
  }
  return longest;
}

console.log(totalFruit([3, 3, 3, 1, 2, 1, 1, 2, 3, 3, 4])); //4
console.log(totalFruit([1, 2, 3, 2, 2])); //4
