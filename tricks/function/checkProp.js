/*Given a predicate function and a prop string, this curried function will then take an object to inspect by calling the property and passing it to the predicate.

Summon prop on obj, pass it to a provided predicate function and return a masked boolean.*/

const checkProp = (predicate, prop) => obj => !!predicate(obj[prop])


const lengthIs4 = checkProp(l => l === 4, 'length');
lengthIs4([]); // false
lengthIs4([1, 2, 3, 4]); // true
lengthIs4(new Set([1, 2, 3, 4])); // false (Set uses Size, not length)

const session = {user: {}};
const validUserSession = checkProps(u => u.active && !u.disabled, 'user');

validUserSession(session); // false

session.user.active = true;
validUserSession(session); // true

const noLength = checkProp(l => l === undefined, 'length');
noLength([]); // false
noLength({}); // true
noLength(new Set()); // true
