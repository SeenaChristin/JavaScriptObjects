const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const keys = require('../keys');

let keysArr = keys(testObject);

console.log(keysArr);