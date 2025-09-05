class Heap {
  #heap = [];

  getHeap() {
    return [...this.#heap];
  }

  #leftChildIndex(index) {
    return 2 * index + 1;
  }

  #rightChildIndex(index) {
    return 2 * index + 2;
  }

  #parentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  #swap(index1, index2) {
    [this.#heap[index1], this.#heap[index2]] = [
      this.#heap[index2],
      this.#heap[index1],
    ];
  }

  insert(value) {
    this.#heap.push(value);
    let current = this.#heap.length - 1;

    while (
      current > 0 &&
      this.#heap[current] > this.#heap[this.#parentIndex(current)]
    ) {
      this.#swap(current, this.#parentIndex(current));
      current = this.#parentIndex(current);
    }
  }

  #sinkDown(index) {
    let maxIndex = index;
    let size = this.#heap.length;
    while (true) {
      let leftChildIndex = this.#leftChildIndex(index);
      let rightChildIndex = this.#rightChildIndex(index);

      if (
        leftChildIndex < size &&
        this.#heap[leftChildIndex] > this.#heap[maxIndex]
      ) {
        maxIndex = leftChildIndex;
      }

      if (
        rightChildIndex < size &&
        this.#heap[rightChildIndex] > this.#heap[maxIndex]
      ) {
        maxIndex = rightChildIndex;
      }

      if (maxIndex !== index) {
        this.#swap(index, maxIndex);
        index = maxIndex;
      } else {
        return;
      }
    }
  }

  remove() {
    if (this.#heap.length === 0) return null;
    if (this.#heap.length === 1) return this.#heap.pop();
    const maxValue = this.#heap[0];
    this.#heap[0] = this.#heap.pop();
    this.#sinkDown(0);
    return maxValue;
  }
}
