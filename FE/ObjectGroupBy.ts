/**
 * Object.groupBy() allows us to easily group array items.
 */

const items = [
  {
    id: 1,
    kind: "a",
  },
  {
    id: 2,
    kind: "b",
  },
  {
    id: 3,
    kind: "a",
  },
];

function ObjectGroupBy<T, K extends keyof any>(
  items: Array<T>,
  callback: (item: T) => K
): Record<K, Array<T>> {
  // Your code here
  // const result = {} as Record<K, Array<T>>;
  const result = Object.create(null);

  for (let item of items) {
    const key = callback(item);
    // if (!(key in result))
    if (!result[key]) result[key] = [];
    result[key].push(item);
  }

  return result;
}

console.log(ObjectGroupBy(items, ({ kind }) => kind));
// {
//   a: [
//     {
//       id: 1,
//       kind: 'a'
//     },
//     {
//       id: 3,
//       kind: 'a'
//     }
//   ],
//   b: [
//     {
//       id: 2,
//       kind: 'b'
//     }
//   ]
// }
console.log(
  ObjectGroupBy([0, 1, 2, 3, 4, 5], (item) => (item % 2 === 0 ? "even" : "odd"))
);
// { even: [ 0, 2, 4 ], odd: [ 1, 3, 5 ] }
