let prop = [1, 2, 3, 3, 2, 4, 5, 4, 7, 3];
let Execute = prop.filter(function (este, i) {
    return prop.indexOf(este) === i;
});
console.log(Execute);