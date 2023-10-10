function keys(obj){
    let result = [];
    for(let x in obj){
        result.push(x);
    }
    return result;
}

module.exports = keys;