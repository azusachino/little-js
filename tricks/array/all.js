/*
* Returns true if the provided predicate function returns true for all elements in a collection, false otherwise.

Use Array.prototype.every() to test if all elements in the collection return true based on fn. Omit the second argument, fn, to use Boolean as a default.
*/

const all = (arr, fn = Boolean) => arr.every(fn)

console.log(all([4, 2, 3], x => x > 1))



