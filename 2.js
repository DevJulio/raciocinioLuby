function invertArr(prop) {
    let arrAux = []
    for (let count = prop.length - 1; count >= 0; count--) {
        console.log(count);
        arrAux.push(prop[count])
    }

    return arrAux
}
let prop = [1, 2, 3, 4]
let Execute = invertArr(prop)
console.log(Execute);

