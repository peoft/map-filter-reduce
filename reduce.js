function sumNumbers(array) {
    return array.reduce(function (previous, current) {
        console.log({ previous });
        console.log({ current });
        return previous + current;
    })
}

function finalSaving(prices, available) {
    let finalSaving = prices.reduce(cbPrices);
    return available - finalSaving;
}

function cbPrices(previous, current) {
    return previous + current;
}

let array =[1, 2, 4, 5, 10, 15, 21];

console.log(sumNumbers(array));

let prices =[1, 2, 4, 5, 10];

console.log(finalSaving(prices, 30));
