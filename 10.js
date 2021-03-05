function newArrFiltered(propArr, valueOut) {
    let valueOutSet = new Set(valueOut);
    return propArr.filter(function (arg) { return valueOutSet.has(arg); });
}
let propArr = [8, 6]
let valueOut = [8, 9]
let Execute = newArrFiltered(propArr, valueOut)
console.log(Execute);
