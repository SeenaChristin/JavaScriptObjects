const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const defaults = require('../defaults');
const defaultArr = { name: 'User1', age: 0, location: 'US', Gender: 'Not mentioned' };

let valuesArr = defaults(testObject,defaultArr);

console.log(valuesArr);