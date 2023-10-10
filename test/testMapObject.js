const testObject = { name: 'Bruce Wayne', age: 36, location: 'Gotham' };
const mapObject = require('../mapObject');

let valuesArr = mapObject(testObject,(val)=>{
    if(typeof(val)=='number'){
        return val+2;
    }
    else{
        return val;
    }
    
});

console.log(valuesArr);