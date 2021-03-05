function arrFiltered(propArr, valueOut) {
    let valueOutSet = new Set(valueOut);
    return propArr.filter(function (arg) { return !valueOutSet.has(arg); });
}
let propArr = [5, 4, 3, 2, 5];
let valueOut = [5, 3]
let Execute = arrFiltered(propArr, valueOut)
console.log(Execute);
