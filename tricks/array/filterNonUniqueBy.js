/*
* Filters out the non-unique values in an array, based on a provided comparator function.

Use Array.prototype.filter() and Array.prototype.every() for an array containing only the unique values, based on the comparator function, fn. The comparator function takes four arguments: the values of the two elements being compared and their indexes. */

const filterNonUniqueBy = (arr, fn) =>
    arr.filter((element, index) => arr.every((e, i) => (index === i) === fn(element, e, index, i)))

filterNonUniqueBy(
    [
        {id: 0, value: 'a'},
        {id: 1, value: 'b'},
        {id: 2, value: 'c'},
        {id: 1, value: 'd'},
        {id: 0, value: 'e'}
    ],
    (a, b) => a.id === b.id
); // [ { id: 2, value: 'c' } ]
