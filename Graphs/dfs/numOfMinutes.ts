// 1376. Time Needed to Inform All Employees
// A company has n employees with a unique ID for each employee from 0 to n - 1.
//  The head of the company is the one with headID.
// Each employee has one direct manager given in the manager array where manager[i]
//  is the direct manager of the i-th employee, manager[headID] = -1. Also, it is guaranteed that
// the subordination relationships have a tree structure.
// The head of the company wants to inform all the company employees of an urgent piece of news.
//  He will inform his direct subordinates, and they will inform their subordinates, and so on until
//  all employees know about the urgent news.
// The i-th employee needs informTime[i] minutes to inform all of his direct subordinates
// (i.e., After informTime[i] minutes, all his direct subordinates can start spreading the news).
// Return the number of minutes needed to inform all the employees about the urgent news.
function numOfMinutes(
  n: number,
  headID: number,
  manager: number[],
  informTime: number[],
): number {
  const adj = new Map<number, number[]>();

  for (let i = 0; i < n; i++) {
    let employee = i;
    let employeesManager = manager[i];
    if (!adj.has(employeesManager)) adj.set(employeesManager, []);
    adj.get(employeesManager)?.push(employee);
  }
  console.log(adj);
  // return minutes needed to inform neighbours ie employees
  function dfs(employee: number): number {
    if (!adj.has(employee)) return 0;

    let minutes = 0;
    for (let empl of adj.get(employee) ?? []) {
      // if some children had their own subtrees returning different values like 3 and 5 then we can't just sum,
      //  we need to take the max of them because we can inform all children at the same time,
      // so we need to wait for the longest subtree to be informed before we can inform the next level of employees
      minutes = Math.max(minutes, dfs(empl));
    }
    return minutes + informTime[employee];
  }

  return dfs(headID);
}
