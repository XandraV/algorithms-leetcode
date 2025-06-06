let user = {
  firstName: "Cat",
  sayName(a) {
    return this.firstName + a;
  },
};

function sayFirstLetter(t) {
  return this.firstName[0] + t;
}
console.log(user.sayName());
let sayFirstL = sayFirstLetter.bind(user);
console.log(sayFirstL("o"));

console.log(sayFirstLetter.call({ firstName: "pop" }, 9));
