function compareTriplets(a, b) {
  let points = [0, 0];
  for (let i in a) {
    if (a[i] > b[i]) {
      points[0] += 1;
    }
    if (a[i] < b[i]) {
      points[1] += 1;
    }
  }
  return points;
}

console.log(compareTriplets([17, 28, 30], [99, 16, 8])); //[2,1]
