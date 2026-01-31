// Design a time-based key-value data structure
// that can store multiple values for the same key at different time stamps
// and retrieve the key's value at a certain timestamp.

// Implement the TimeMap class:
// TimeMap() Initializes the object of the data structure.
// void set(String key, String value, int timestamp) Stores the key key with the value
// value at the given time timestamp.
// String get(String key, int timestamp) Returns a value such that
// set was called previously, with timestamp_prev <= timestamp.
// If there are multiple such values, it returns the value associated with
// the largest timestamp_prev. If there are no values, it returns "".

class TimeMap {
  tMap: Map<string, { timestamp: number; value: string }[]>;
  constructor() {
    this.tMap = new Map();
  }

  set(key: string, value: string, timestamp: number): void {
    if (this.tMap.has(key)) {
      this.tMap.get(key)!.push({ timestamp, value });
    } else {
      this.tMap.set(key, [{ timestamp, value }]);
    }
  }

  get(key: string, timestamp: number): string {
    if (this.tMap.has(key)) {
      const keyToSearch = this.tMap.get(key)!;
      // binary search
      let low = 0;
      let high = keyToSearch.length - 1;
      let mid = -1;
      let result = "";
      while (low <= high) {
        mid = Math.floor((low + high) / 2);
        let midTimeStamp = keyToSearch[mid].timestamp;
        if (midTimeStamp === timestamp) {
          result = keyToSearch[mid].value;
          return result;
        } else if (midTimeStamp < timestamp) {
          result = keyToSearch[mid].value;
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
      return result;
    } else {
      return "";
    }
  }
}
