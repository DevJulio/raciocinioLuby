function renderArr(count, word) {
    let finalArr = []
    for (let a = 0; a < count; a++) {
        finalArr.push(word)
    }
    return finalArr
}

let Execute = renderArr(3, 'a')
console.log(Execute);