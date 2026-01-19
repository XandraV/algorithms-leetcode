// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.
// Implement the LRUCache class:
// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists.
// Otherwise, add the key-value pair to the cache.
// If the number of keys exceeds the capacity from this operation, evict the least recently used key.
// The functions get and put must each run in O(1) average time complexity.

class LRUCache {
  capacity: number;
  lru: Map<number, number>;

  constructor(capacity: number) {
    this.capacity = capacity;
    this.lru = new Map();
  }

  get(key: number): number {
    if (!this.lru.has(key)) return -1;

    const value = this.lru.get(key)!;
    // move to most recently used
    this.lru.delete(key);
    this.lru.set(key, value);

    return value;
  }

  put(key: number, value: number): void {
    // If key exists, remove it first (to refresh order)
    if (this.lru.has(key)) {
      this.lru.delete(key);
    }
    // If cache is full, evict least recently used
    else if (this.lru.size >= this.capacity) {
      const lruKey = this.lru.keys().next().value;
      this.lru.delete(lruKey!);
    }

    // Insert as most recently used
    this.lru.set(key, value);
  }
}
