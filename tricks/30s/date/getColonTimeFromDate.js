/*Returns a string of the form HH:MM:SS from a Date object.

Use Date.prototype.toTimeString() and String.prototype.slice() to get the HH:MM:SS part of a given Date object.*/

const getColonTimeFromDate = date => date.toTimeString().slice(0, 8)

getColonTimeFromDate(new Date()); // "08:38:00"