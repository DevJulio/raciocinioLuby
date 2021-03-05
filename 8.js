function onlyArr(vetores) {
    let vector = [];
    for (let i = 0; i < vetores.length; i++) {
        if (Array.isArray(vetores[i])) {
            for (let j = 0; j < vetores[i].length; j++) {
                vector.push(vetores[i][j]);
            }
        } else {
            vector.push(vetores[i]);
        }
    }
    return vector;
}

let prop = ([1, 2, [3], [4, 5]])
let Execute = (onlyArr(prop));
console.log(Execute);