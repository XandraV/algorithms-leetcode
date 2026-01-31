// leetcode 332
// You are given a list of airline tickets where tickets[i] = [fromi, toi]
// represent the departure and the arrival airports of one flight. Reconstruct
// the itinerary in order and return it.

// All of the tickets belong to a man who departs from "JFK", thus, the itinerary must begin with "JFK".
// If there are multiple valid itineraries, you should return the itinerary that has the smallest lexical
// order when read as a single string.

// For example, the itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
// You may assume all tickets form at least one valid itinerary. You must use all the tickets once and only once.

function findItinerary(tickets: string[][]): string[] {
  const itenary: string[] = [];

  // adjacency list
  const graph: Map<string, string[]> = new Map();

  for (const [from, to] of tickets) {
    if (!graph.has(from)) {
      graph.set(from, [to]);
    } else {
      graph.get(from)?.push(to);
    }
  }

  // sort destinations lexicographically
  for (const [from, dests] of graph) {
    dests.sort();
  }

  function dfs(airport: string) {
    const dests = graph.get(airport);
    while (dests && dests.length > 0) {
      const next = dests.shift()!; // take the lex smallest unused ticket
      dfs(next);
    }
    itenary.push(airport); // push after visiting all edges
  }

  dfs("JFK");

  return itenary.reverse(); // reverse at the end
}

// Example:
console.log(
  findItinerary([
    ["MUC", "LHR"],
    ["JFK", "MUC"],
    ["SFO", "SJC"],
    ["LHR", "SFO"],
  ]),
);
// Output: ["JFK","MUC","LHR","SFO","SJC"]
