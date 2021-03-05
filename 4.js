function mapItens(vetor) {
    let map = new Map();
    for (let i = 0; i < vetor.length; i++) {
        map.set(vetor[i][0], vetor[i][1]);
    }
    return map;
}

let prop = ([["c", 2], ["d", 4]]);
let Execute = mapItens(vetor);

console.log(result);