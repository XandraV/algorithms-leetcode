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