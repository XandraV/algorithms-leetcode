function moveZeros(list: number[]): number[] {
  let insertPos = 0;

  // Move non-zero elements forward
  for (let i = 0; i < list.length; i++) {
    if (list[i] !== 0) {
      list[insertPos++] = list[i];
    }
  }

  // Fill the rest with zeros
  while (insertPos < list.length) {
    list[insertPos++] = 0;
  }

  return list;
}

const test = [1, 0, 0, 2, 3];
moveZeros(test);
console.log(test); // [1, 2, 3, 0, 0]

function moveZeros2(list: number[]): void {
  let nonZero = [];
  let zeroCount = 0;
  for (let num of list) {
    if (num === 0) {
      zeroCount++;
    } else {
      nonZero.push(num);
    }
  }
  // Fill the rest with zeros
  list.length = 0;
  list.push(...nonZero, ...Array(zeroCount).fill(0));
}

const test2 = [1, 0, 0, 2, 3];
moveZeros2(test2);
console.log(test2); // [1, 2, 3, 0, 0]
