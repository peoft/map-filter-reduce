const maca = {
    value: 2,
}

const laranja = {
    value: 3,    
}

function mapComThis(array, thisArg) {
    return array.map(function(item) {
        return item * this.value;
    }, thisArg);
}

function mapSemThis(array) {
    return array.map(function(item) {
        return item * 5;
    });
}

let array =[2, 4, 6, 10, 15, 30];

console.log('this -> maca', mapComThis(array, maca));
console.log('this -> laranja', mapComThis(array, laranja));
console.log('sem this', mapSemThis(array));

