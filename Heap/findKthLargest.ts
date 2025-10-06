// this solution doesn't scale, needs to be done with min-heap
function findKthLargest(nums: number[], k: number): number {
  let heap: number[] = [];

  // remove just ONE occurrence of val
  function removeOne(arr: number[], val: number): void {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === val) {
        arr.splice(i, 1);
        return;
      }
    }
  }

  const findSmallest = (h: number[]) => {
    let min = Infinity;
    for (let i = 0; i < h.length; i++) {
      if (h[i] < min) min = h[i];
    }
    return min;
  };

  for (let num of nums) {
    heap.push(num);
    if (heap.length > k) {
      const smallest = findSmallest(heap);
      removeOne(heap, smallest); // remove only one copy
    }
  }

  // kth largest = smallest in the final heap
  return findSmallest(heap);
}

console.log(findKthLargest([99, 99], 1)); // 99
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4)); // 4

/* https://datastructures-js.info/docs/heap

function findKthLargest2(nums: number[], k: number): number {
    let minHeap = new MinHeap()


    for (let num of nums) {
        minHeap.insert(num);
        if (minHeap.size() > k) {
            minHeap.pop()
        }
    }

    // kth largest = smallest in the final heap

    return Number(minHeap.root());
}
*/
