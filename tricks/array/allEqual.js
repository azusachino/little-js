/*Check if all elements in an array are equal.

Use Array.prototype.every() to check if all the elements of the array are the same as the first one. Elements in the array are compared using the strict comparison operator, which does not account for NaN self-inequality.*/

const allEqual = arr => arr.every(val => val === arr[0])


console.log(allEqual([1, 2, 3, 4, 5, 6, 7]))
