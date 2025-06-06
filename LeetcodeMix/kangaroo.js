//https://bmizepatterson.com/2018/10/01/the-kangaroo-problem/
function kangaroo(x1, v1, x2, v2) {
    // A 'best' solution with recursion
    
    // BASE CASE 1: Success
    // If the kangaroos are on the same spot, then we found a solution
    if (x1 == x2) return 'YES';

    // BASE CASE 2: Failure
    // If the 1st kangaroo has jumped ahead of the 2nd kangaroo,
    // then they'll never land on the same spot.
    if (x1 > x2) return 'NO';

    // BASE CASE 3: Failure
    // If Kangaroo 2 is going faster than Kangaroo 1,
    // then they'll never land on the same spot.
    if (v2 > v1) return 'NO';

    // BASE CASE 4: Failure
    // If the kangaroos have the same velocity
    // (and they're not on the same spot already)
    // then they'll never land on the same spot.
    if (v1 == v2) return 'NO';

    // RECURSIVE CASE:
    // Update x1 and x2 and call kangaroo() again.
    x1 += v1;
    x2 += v2;
    return kangaroo(x1, v1, x2, v2);
}


console.log(kangaroo(0,3,4,2))