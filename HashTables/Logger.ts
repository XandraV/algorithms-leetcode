// Design a logger system that receives a stream of messages along with their timestamps.
// Each unique message should only be printed at most every 10 seconds
// (i.e. a message printed at timestamp t will prevent other identical messages
// from being printed until timestamp t + 10).
// All messages will come in chronological order. Several messages may arrive at the same timestamp.
// Implement the Logger class:
// Logger() Initializes the logger object.
// bool shouldPrintMessage(int timestamp, string message) Returns true
// if the message should be printed in the given timestamp, otherwise returns false.
class Logger {
  logLimit = new Map<string, number>();

  shouldPrintMessage(timestamp: number, message: string): boolean {
    const nextAllowed = this.logLimit.get(message);

    if (nextAllowed === undefined || timestamp >= nextAllowed) {
      this.logLimit.set(message, timestamp + 10);
      return true;
    }

    return false;
  }
}

/**
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
