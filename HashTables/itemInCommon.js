function itemInCommon(arr1, arr2) {
     let obj = {}
     // Create an object to store elements of arr1 as keys
     for (let i = 0; i < arr1.length; i++) {
         obj[arr1[i]] = true
     }
     // Check if any element in arr2 exists in the object
     for (let j = 0; j < arr2.length; j++) {
       if (obj[arr2[j]]) return true
     }
     // we loop through both arrays once hence O(2n) time complexity which is just O(n)
     // this is more efficent than using nested loops which would be O(n^2)
     return false
}


   
let array1 = [1, 3, 5]
let array2 = [2, 4, 5]
   
itemInCommon(array1, array2)


function itemInCommon2(array1, array2) {
 
    // Create a new Map object to store items from the first array (array1).
    const myMap = new Map(); //implemented as a hash table internally with minimal collisions
    for (let i of array1) {
 
        // For each item 'i' in array1, we set
        // its value in 'myMap' to 'true'.
        // This way, we can easily check later 
        // if we've seen this item before.
        myMap.set(i, true); // map.set() completes in O(1) time
    }
 
    // go through every item in the second array, named array2.
    for (let j of array2) {
 
        // For each item in array2 check
        // if it's in 'myMap'.
        // If it is, it means we've seen this item
        // in array1, so array1 and array2 do have 
        // at least one item in common.
        if (myMap.has(j)) { // map.has() completes in O(1) time
 
            // We found a common item, so we return 'true' and end the function.
            return true;
        }
    }
 
    // If the function hasn't returned 'true' yet,
    // it means no common items were found hence we return 'false'.
    return false;
}