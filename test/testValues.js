const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const values = require('../values');

let valuesArr = values(testObject);

console.log(valuesArr);