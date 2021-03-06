/*Performs left-to-right function composition.

Use Array.prototype.reduce() with the spread operator (...) to perform left-to-right function composition. The first (leftmost) function can accept one or more arguments; the remaining functions must be unary.*/

const pipeFunctions = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)))

const add5 = x => x + 5
const multiply = (x, y) => x * y
const multiAndAdd = pipeFunctions(multiply, add5)
console.log(multiAndAdd(5, 2))
console.log(multiAndAdd)
