

function spliceArr(propArr, size) {
    var results = [];
    while (propArr.length) {
        results.push(propArr.splice(0, size));
    }
    return results;
};


let propArr = [1, 2, 3, 4, 5]
let size = 2
let Execute = spliceArr(propArr, size)
console.log(Execute);
