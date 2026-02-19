// Implement the RandomizedSet class:
// RandomizedSet() Initializes the RandomizedSet object.
// bool insert(int val) Inserts an item val into the set if not present.
// Returns true if the item was not present, false otherwise.
// bool remove(int val) Removes an item val from the set if present.
//  Returns true if the item was present, false otherwise.
// int getRandom() Returns a random element from the current set of elements
// (it's guaranteed that at least one element exists when this method is called).
// Each element must have the same probability of being returned.
// You must implement the functions of the class such that each function works in
// average O(1) time complexity.

class RandomizedSet {
  db: number[];
  indexMap: Map<number, number>;
  constructor() {
    this.db = [];
    this.indexMap = new Map();
  }

  insert(val: number): boolean {
    if (this.indexMap.has(val)) return false;
    else {
      this.db.push(val);
      this.indexMap.set(val, this.db.length - 1);

      return true;
    }
  }

  remove(val: number): boolean {
    if (!this.indexMap.has(val)) return false;

    const idxToRemove = this.indexMap.get(val)!;
    let lastVal = this.db[this.db.length - 1];
    [this.db[idxToRemove], this.db[this.db.length - 1]] = [
      this.db[this.db.length - 1],
      this.db[idxToRemove],
    ];

    this.indexMap.set(lastVal, idxToRemove);

    this.db.pop();
    this.indexMap.delete(val);
    return true;
  }

  getRandom(): number {
    const idx = Math.floor(Math.random() * this.db.length);

    return this.db[idx];
  }
}

const obj = new RandomizedSet();
const param_1 = obj.insert(2);
const param_4 = obj.insert(4);
const param_3 = obj.insert(88);
const param_2 = obj.remove(77);
console.log(obj.getRandom());
