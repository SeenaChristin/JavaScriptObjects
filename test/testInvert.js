const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const invert = require('../invert');

let valuesArr = invert(testObject);

console.log(valuesArr);