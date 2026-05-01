function search(text: string, query: string) {
  const result: number[][] = [];
  if (!query) return [];

  let startIdx = 0;

  while (startIdx < text.length) {
    const matchIdx = text.indexOf(query, startIdx);

    if (matchIdx === -1) break;

    result.push([matchIdx, matchIdx + query.length - 1]);

    startIdx = matchIdx + query.length;
  }

  return result;
}

console.log(search("quick fox is very quick and smart", "quick"));
// [[0,4], [18,22]]
