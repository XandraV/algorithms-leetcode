const test2arr = [11, 4, 11, 7, 13, 4, 12, 11, 10, 14];
const test2brr = [11, 4, 11, 7, 3, 7, 10, 13, 4, 8, 12, 11, 10, 14, 12];

function missingNumbers(arr: number[], brr: number[]) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) ?? 0) + 1);
  }

  for (let j = 0; j < brr.length; j++) {
    if (map.has(brr[j])) {
      map.set(brr[j], map.get(brr[j]) - 1);
    } else {
      map.set(brr[j], 1);
    }
  }
  //   let m = [...map].filter(([k, v]) => v !== 0).map((a) => a[0]);
  let m = [...new Map([...map].filter(([k, v]) => v !== 0)).keys()];
  return m.sort((a, b) => a - b);
}

console.log(missingNumbers(test2arr, test2brr)); // [3,7,8,10,12]
