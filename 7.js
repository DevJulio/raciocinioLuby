
function twinArr(firstProp, secondProp) {
    return JSON.stringify(firstProp) == JSON.stringify(secondProp);
}


let firstProp = [1, 2, 3, 4];
let secondProp = [1, 2, 3, 4];


let Execute = twinArr(firstProp, secondProp)
console.log(Execute);