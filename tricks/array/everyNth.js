/*
* Returns every nth element in an array.

Use Array.prototype.filter() to create a new array that contains every nth element of a given array.*/

const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1)

everyNth([1, 2, 3, 4, 5, 6], 2); // [ 2, 4, 6 ]
console.log(everyNth([1, 2, 3, 4, 5, 6, 76, 78, 4], 3))
