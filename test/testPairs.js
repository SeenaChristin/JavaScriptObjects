const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const pairs = require('../pairs');

let valuesArr = pairs(testObject);

console.log(valuesArr);