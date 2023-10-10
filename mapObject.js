function mapObject(obj,cb){
    let result = {};
    for(let x in obj){
        result[x]=(cb(obj[x]));
    }
    return result;
}

module.exports = mapObject;