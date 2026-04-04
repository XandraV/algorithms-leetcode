/**
 * LeetCode 1472 - Design Browser History
 *
 * You have a browser of one tab where you start on the homepage
 * and you can visit another url, get back in the history number
 * of steps or move forward in the history number of steps.
 *
 * Implement the BrowserHistory class:
 *
 * BrowserHistory(string homepage)
 *   - Initializes the object with the homepage of the browser.
 *
 * void visit(string url)
 *   - Visits url from the current page.
 *   - It clears up all the forward history.
 *
 * string back(int steps)
 *   - Move steps back in history.
 *   - If you can only return x steps in the history and steps > x,
 *     you will return only x steps.
 *   - Return the current url after moving back in history at most steps.
 *
 * string forward(int steps)
 *   - Move steps forward in history.
 *   - If you can only forward x steps in the history and steps > x,
 *     you will forward only x steps.
 *   - Return the current url after forwarding in history at most steps.
 */

class BrowserHistory {
  history: string[];
  currentPageIdx: number;
  constructor(homepage: string) {
    this.history = [homepage];
    this.currentPageIdx = 0;
  }

  visit(url: string): void {
    if (this.currentPageIdx !== this.history.length - 1) {
      this.history = [...this.history.slice(0, this.currentPageIdx + 1)];
    }
    this.history.push(url);
    this.currentPageIdx = this.history.length - 1;
  }

  back(steps: number): string {
    let newIdx = this.currentPageIdx - steps;
    if (newIdx < 0) {
      this.currentPageIdx = 0;
      return this.history[0];
    }
    this.currentPageIdx = newIdx;
    return this.history[newIdx];
  }

  forward(steps: number): string {
    let newIdx = this.currentPageIdx + steps;
    if (newIdx >= this.history.length) {
      this.currentPageIdx = this.history.length - 1;
      return this.history[this.history.length - 1];
    }
    this.currentPageIdx = newIdx;
    return this.history[newIdx];
  }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
