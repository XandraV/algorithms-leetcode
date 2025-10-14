/**
 * On Twitter(now X), we always see mentions, hashtags and links in blue links, like this one below.
 * eg. "Shaku syntax is now supported on http://BFE.dev! Give it a try to annotate your code ! kudos to @JSer_ZANP for making such a great tool !"
 * One flexible way to implement this is to store the format info separately besides the user input in plain text, and connect them through the indices.
 * In above example, we can use following data structure.
 */
const data = {
  text: "Shaku syntax is now supported on https://t.co/UpkmJ7yGKG! Give it a try to annotate your code ! kudos to @JSer_ZANP for making such a great tool !",
  entities: {
    urls: [
      {
        displayUrl: "BFE.dev", // url to display
        url: "https://t.co/UpkmJ7yGKG", // actual url to redirect
        indices: [
          33, // start index, inclusive
          56, // end index, exclusive
        ],
      },
    ],
    mentions: [
      {
        screenName: "JSer_ZANP", // display screen name
        indices: [
          105, // start index, inclusive
          115, // end index, exclusive
        ],
      },
    ],
  },
};
/**
 * You are now required to create a function to render above data structure into html string.
 * The fields should explain by itself.
 * There is no emoji in the text. You don't need to worry about the index offset.
 * For mention, you should redirect to https://x.com/{screeName}
 * There are no overlaps within the entities.
 */

type EntityBase = {
  indices: number[];
};

type UrlEntity = EntityBase & {
  displayUrl: string;
  url: string;
};

type MentionEntity = EntityBase & {
  screenName: string;
};

type Entities = {
  urls: Array<UrlEntity>;
  mentions: Array<MentionEntity>;
};

type Tweet = {
  text: string;
  entities: Entities;
};

function renderTextWithEntities(text: string, entities: Entities): string {
  const allEntities = [
    ...entities.urls.map((u) => {
      const replacement = `<a href="${u.url}">${u.displayUrl}</a>`;
      return { ...u, replacement };
    }),
    ...entities.mentions.map((m) => {
      const replacement = `<a href="https://x.com/${m.screenName}">@${m.screenName}</a>`;
      return { ...m, replacement };
    }),
  ];
  // sort by the first=start index as the mentions and urls can't overlap
  // same text can't be both url and mention
  const sortedEntities = allEntities.sort(
    (a, b) => a.indices[0] - b.indices[0]
  );

  let result = text;
  let addedIndex = 0;
  for (let entity of sortedEntities) {
    let [start, end] = entity.indices;
    start = start + addedIndex;
    end = end + addedIndex;
    let first = result.slice(0, start);
    let second = result.slice(start, end);
    let replacedSecond = entity.replacement;
    addedIndex = addedIndex + replacedSecond.length - second.length;
    let third = result.slice(end, result.length);
    result = first + replacedSecond + third;
  }

  return result;
}

console.log(renderTextWithEntities(data.text, data.entities));
