function pairs(obj){
    let result = [];
    for(let x in obj){
        let temp = [];
        temp.push(x,obj[x]);
        result.push(temp);
    }
    return result;
}

module.exports = pairs;