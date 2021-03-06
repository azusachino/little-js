/*Returns true if the specified value is null or undefined, false otherwise.

Use the strict equality operator to check if the value and of val are equal to null or undefined.*/

const isNil = val =>
    val === undefined || val === null
isNil(null); // true
isNil(undefined); // true
