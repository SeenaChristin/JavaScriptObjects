function defaults(obj,defaultObj){
    let result = {};
    for(let x in defaultObj){
        if(obj[x] === undefined){
            result[x]=(defaultObj[x]);
        }
        else{
            result[x]=(obj[x]);
        }
    }
    return result;
}

module.exports = defaults;