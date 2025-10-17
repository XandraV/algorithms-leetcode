type Features = {
  a: string;
  b: number;
  c: string;
  d: boolean;
};

// [Key in keyof Features] <- loop over all keys of Features
// Type extends Features[Key] <- Is Type assignable to Features[Key]

export type FeaturesWithType<Type> = {
  readonly [Key in keyof Features]: Type extends Features[Key] ? Key : never;
}[keyof Features]; // take all the values of that object as a union

type test = FeaturesWithType<string>; // type test = "a" | "c"
type test2 = FeaturesWithType<number>; // type test2 = "b"
type test3 = FeaturesWithType<boolean>; // type test3 = "d"
