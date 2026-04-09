// 735. Asteroid Collision
// We are given an array asteroids of integers representing asteroids in a row.
// The indices of the asteroid in the array represent their relative position in space.

// For each asteroid, the absolute value represents its size,
// and the sign represents its direction (positive meaning right, negative meaning left).
// Each asteroid moves at the same speed.

// Find out the state of the asteroids after all collisions.
// If two asteroids meet, the smaller one will explode.
// If both are the same size, both will explode.
// Two asteroids moving in the same direction will never meet.
function asteroidCollision(asteroids: number[]): number[] {
  const stack: number[] = [];

  for (let i = 0; i < asteroids.length; i++) {
    let curr = asteroids[i];
    let alive = true;
    while (
      alive &&
      stack.length > 0 &&
      stack[stack.length - 1] > 0 &&
      curr < 0
    ) {
      const top = stack[stack.length - 1];
      if (Math.abs(curr) > top) {
        stack.pop(); // top explodes
      } else if (Math.abs(curr) === top) {
        // both explode
        stack.pop();
        alive = false; // break the loop move onto next current asteroid
      } else {
        // top stays in stack, curr explodes
        alive = false; // break out of the loop move onto next current asteroid
      }
    }

    // executes when the current asteroid survives all possible collisions.
    // example 1: All moving right → no collision → while loop never runs → alive stays true
    // example 2: nothing to collide with → push
    // example 3: both moving left → no collision → while loop never runs → alive stays true
    // example 4: current asteroid destroys others and survives
    if (alive) {
      stack.push(curr);
    }
  }
  return stack;
}

console.log(asteroidCollision([5, 10, -5])); //  [5, 10]
console.log(asteroidCollision([10, 2, -5])); // [10]
console.log(asteroidCollision([3, 5, -6, 2, -1, 4])); // [-6,2,4]
