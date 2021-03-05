function checkArr(prop) {
    let arrAux = []

    for (let a = 0; a < prop.length; a++) {

        if (prop[a]) {
            if (prop[a] != " ") {
                arrAux.push(prop[a])
            }
        }

    }

    return arrAux
}
let prop = [1, "", undefined, null, 2, 0]
let Execute = checkArr(prop)
console.log(Execute);

