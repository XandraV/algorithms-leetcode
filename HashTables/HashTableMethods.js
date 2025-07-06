class HashTable {
  /*
        HashTable Visualization (Horizontal):

        +----------------------------------------------------------------------------------------------------------------------+
        |  0  |      1          |      2           |      3           |      4           |      5           |      6           |
        +-----+-----------------+------------------+------------------+------------------+------------------+------------------+
        |     | [['paint', 20]] | [ ['bolts', 40], |                  | [['nails', 100]] | [ ['tile', 50],  | [ ['lumber', 80],|
        |     |                 |   ['screws', 15]]|                  |                  |   ['grout', 12]] |   ['saw', 25]  ] |
        +-----+-----------------+------------------+------------------+------------------+------------------+------------------+

        Each index can contain an array (bucket) of key-value pairs.
        Collisions are handled by storing multiple [key, value] pairs in the same bucket/array.
    */

  constructor(size = 7) {
    this.dataMap = new Array(size);
  }

  // Generates a hash for the given key
  // total time = O(length of key) = O(k).
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
    }
    return hash;
  }

  printTable() {
    for (let i = 0; i < this.dataMap.length; i++) {
      console.log(i, ": ", this.dataMap[i]);
    }
  }

  // Adds a key-value pair to the hash table
  // O(1) complexity
  set(key, value) {
    let index = this._hash(key);

    if (!this.dataMap[index]) this.dataMap[index] = [];
    // If the key already exists, it pushes the new value to the existing key's array
    // This allows for multiple values to be stored under the same key
    this.dataMap[index].push([key, value]);
    // Returns the hash table instance for method chaining
    return this;
  }

  // O(1) complexity as the number of items per bucket(ie inside this.dataMap[index]) is small
  // usually 1, 2 or a few
  // So the loop runs only a few times → still constant time, i.e., O(1).
  get(key) {
    // retrieves the index for the key we want to get the value for
    let index = this._hash(key);
    // if the index exists in the dataMap
    if (this.dataMap[index]) {
      // we loop through the array at that index
      for (let i = 0; i < this.dataMap[index].length; i++) {
        // if the key matches the first element of the sub-array
        if (this.dataMap[index][i][0] === key) {
          // we return the second element of the sub-array, which is the value
          return this.dataMap[index][i][1];
        }
      }
    }
    return undefined;
  }

  // Returns an array of all keys in the hash table
  // O(n + m) complexity where m is the number of buckets and n is the number of key-value pairs/entrie in that bucket
  // The inner loop only runs for entries actually in that bucket and not m times for every n,
  keys() {
    let allKeys = [];
    // loop through the dataMap
    for (let i = 0; i < this.dataMap.length; i++) {
      // run m times for every bucket
      // check if there is anything at that index
      if (this.dataMap[i]) {
        // if there is, loop through the array
        for (let j = 0; j < this.dataMap[i].length; j++) {
          // run n times = every entry in that bucket, sum of all j = n
          // push the first element of the sub-array (the key) to allKeys
          allKeys.push(this.dataMap[i][j][0]);
        }
      }
    }
    return allKeys;
  }
}

function test() {
  let myHashTable = new HashTable();

  myHashTable.set("paint", 20);
  myHashTable.set("bolts", 40);
  myHashTable.set("nails", 100);
  myHashTable.set("tile", 50);
  myHashTable.set("lumber", 80);

  console.log(myHashTable.keys());
}

test();

/*
    EXPECTED OUTPUT:
    ----------------
    [ 'paint', 'bolts', 'nails', 'tile', 'lumber' ]

*/
