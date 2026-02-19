// 3186. Maximum Total Damage With Spell Casting
// A magician has various spells.
// You are given an array power, where each element represents the damage of a spell.
// Multiple spells can have the same damage value.
// It is a known fact that if a magician decides to cast a spell with a damage of power[i],
// they cannot cast any spell with a damage of
// power[i] - 2, power[i] - 1, power[i] + 1, or power[i] + 2.
// Each spell can be cast only once.
// Return the maximum possible total damage that a magician can cast.

function maximumTotalDamage(power: number[]): number {
  const totalDamage = new Map();
  for (let p of power) {
    totalDamage.set(p, (totalDamage.get(p) ?? 0) + p);
  }

  const uniqueVals = Array.from(totalDamage.keys()).sort((a, b) => a - b);
  const n = uniqueVals.length;

  const dp: number[] = new Array(n).fill(0);
  dp[0] = totalDamage.get(uniqueVals[0])!;
  // For each value v, you can only combine it with values ≤ v - 3.
  for (let i = 1; i < n; i++) {
    const currentValue = uniqueVals[i];
    const currentDamage = totalDamage.get(currentValue)!;
    // So for each value, find the last value that does NOT conflict with currentValue
    // ie smaller than curr - 2
    let j = i - 1;
    while (j >= 0 && currentValue - uniqueVals[j] <= 2) {
      j--;
    }

    // any dp equal or less than dp[j] are made up of uniqueVals less than currentValue - 2
    // because we sorted uniqueVals hence looping through them in order
    const take = currentDamage + (j >= 0 ? dp[j] : 0);
    const skip = dp[i - 1];

    dp[i] = Math.max(take, skip);
  }

  return dp[n - 1];
}

console.log(maximumTotalDamage([1, 1, 3, 4]));
