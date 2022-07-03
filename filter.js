function getEvensFromArray(array) {
    return array.filter(function(item) {
        if (item % 2 === 0) {
            return item;
        }
    })
}

let array =[2, 4, 5, 10, 15, 21];

console.log(getEvensFromArray(array));