class AsyncTaskQueue {
  private concurrency: number;
  private noOfRunningTasks: number = 0;
  private taskQueue: Array<() => Promise<any>> = [];

  constructor(concurrency: number) {
    this.concurrency = concurrency;
  }

  runNext() {
    if (
      this.noOfRunningTasks === this.concurrency ||
      this.taskQueue.length === 0
    ) {
      return;
    }

    const nextTask = this.taskQueue.shift();

    if (nextTask) {
      this.noOfRunningTasks++;
      nextTask()
        .then((message) => {
          console.log(message);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.noOfRunningTasks--;
          this.runNext();
        });
    }
  }

  queue(task: () => Promise<any>) {
    // add an async task to the queue
    this.taskQueue.push(task);
    this.runNext();
  }
}

const queue = new AsyncTaskQueue(2); // Allow up to 2 tasks to run concurrently
// Example async tasks
const task1 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Task 1 done"), 1000));
const task2 = () =>
  new Promise((resolve, reject) =>
    setTimeout(() => reject("Task 2 failed"), 500)
  );
const task3 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Task 3 done"), 200));
// Queue tasks
queue.queue(task1); // Starts immediately
queue.queue(task2); // Starts immediately (concurrency = 2)
queue.queue(task3); // Waits until one of the first two tasks completes

// Order of console logs
// Task 2 failed
// Task 3 done
// Task 1 done

// Task 3 not starting immediately because concurrency = 2
// and Task 1 (1000 ms) and Task 2 (500 ms) are already running
