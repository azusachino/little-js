/*Checks if the given argument is a number.

Use typeof to check if a value is classified as a number primitive. To safeguard against NaN, check if val === val (as NaN has a typeof equal to number and is the only value not equal to itself).*/

const isNUmber = val => typeof val === 'number' && val === val

isNumber(1); // true
isNumber('1'); // false
isNumber(NaN); // false
