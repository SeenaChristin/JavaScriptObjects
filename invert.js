function invert(obj){
    let result = {};
    for(let x in obj){
        result[obj[x]] = x;
    }
    return result;
}

module.exports = invert;