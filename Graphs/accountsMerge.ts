// Given a list of accounts where each element accounts[i] is a list of strings,
// where the first element accounts[i][0] is a name, and the rest of the elements
//  are emails representing emails of the account.
// Now, we would like to merge these accounts.
// Two accounts definitely belong to the same person if there is some common email
// to both accounts. Note that even if two accounts have the same name, they may belong
// to different people as people could have the same name.
// A person can have any number of accounts initially,
// but all of their accounts definitely have the same name.
// After merging the accounts, return the accounts in the following format:
// the first element of each account is the name, and the rest of the elements
// are emails in sorted order. The accounts themselves can be returned in any order.
function accountsMerge(accounts: string[][]): string[][] {
  const graph = new Map<string, Set<string>>();
  const emailToName = new Map<string, string>();

  // 1. Build graph
  for (const account of accounts) {
    const name = account[0];

    for (let i = 1; i < account.length; i++) {
      const email = account[i];
      emailToName.set(email, name);

      if (!graph.has(email)) {
        graph.set(email, new Set());
      }

      if (i > 1) {
        const prevEmail = account[i - 1];
        graph.get(email)!.add(prevEmail);
        graph.get(prevEmail)!.add(email);
      }
    }
  }

  // 2. DFS to find connected components
  const visited = new Set<string>();
  const result: string[][] = [];

  function dfs(email: string, component: string[]) {
    visited.add(email);
    component.push(email);

    for (const neighbor of graph.get(email)!) {
      if (!visited.has(neighbor)) {
        dfs(neighbor, component);
      }
    }
  }

  // 3. Collect components
  for (const email of graph.keys()) {
    if (!visited.has(email)) {
      const component: string[] = [];
      dfs(email, component);
      component.sort();
      result.push([emailToName.get(email)!, ...component]);
    }
  }

  return result;
}
