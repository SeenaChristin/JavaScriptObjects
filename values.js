function values(obj){
    let result = [];
    for(let x in obj){
        result.push(obj[x]);
    }
    return result;
}

module.exports = values;