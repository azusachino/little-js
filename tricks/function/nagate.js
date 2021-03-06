/*Negates a predicate function.

Take a predicate function and apply the not operator (!) to it with its arguments.*/

const negate = fn => (...args) =>
    !fn(...args)

        [1, 2, 3, 4, 5, 6].filter(negate(n => n % 2 === 0)); // [ 1, 3, 5 ]
