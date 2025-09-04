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
}
