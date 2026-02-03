// One of the differences between null and undefined is how they are 
// treated differently in JSON.stringify().
// JSON.stringify({a: null})      // '{"a":null}'
// JSON.stringify({a: undefined}) // '{}'
// JSON.stringify([null])         // '[null]'
// JSON.stringify([undefined])    // '[null]'
// This difference might create troubles if there are missing alignments
// between client and server. It might be helpful to enforce using only one of them.

// You are asked to implement undefinedToNull() to return a copy that has all undefined replaced with null.
function undefinedToNull(obj: any): any {
  if (Array.isArray(obj)) {
    const result: any[] = [];
    for (let i = 0; i < obj.length; i++) {
      const v = obj[i];
      if (v === undefined) {
        result[i] = null;
      } else if (typeof v === "object" && v !== null) {
        result[i] = undefinedToNull(v);
      } else {
        result[i] = v;
      }
    }
    return result;
  } else if (typeof obj === "object" && obj !== null) {
    const result: Record<string, any> = {};
    for (const [k, v] of Object.entries(obj)) {
      if (v === undefined) {
        result[k] = null;
      } else if (typeof v === "object" && v !== null) {
        result[k] = undefinedToNull(v);
      } else {
        result[k] = v;
      }
    }
    return result;
  } else {
    return obj;
  }
}

const test = {
  a: undefined,
  b: { c: { d: undefined, e: ["BFE.dev", undefined] } },
};
console.log(undefinedToNull(test));
console.log(test);
// {a: null, b: 'BFE.dev'}

const test2 = { a: ["BFE.dev", undefined, "bigfrontend.dev"] };
undefinedToNull(test2);
console.log(test2);
// { a: [ 'BFE.dev', undefined, 'bigfrontend.dev' ] }

function undefinedToNullInPlace(myObj: any): void {
  {
    if (Array.isArray(myObj)) {
      for (let i = 0; i < myObj.length; i++) {
        let v = myObj[i];
        if (v === undefined) {
          myObj[i] = null;
        } else if (typeof v === "object" && v !== null) {
          undefinedToNullInPlace(v);
        }
      }
      return;
    } else if (typeof myObj === "object" && myObj !== null) {
      for (let [k, v] of Object.entries(myObj)) {
        if (v === undefined) {
          myObj[k] = null;
        } else if (typeof v === "object" && v !== null) {
          undefinedToNullInPlace(v);
        }
      }
    }
  }
}