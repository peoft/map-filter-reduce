function sumNumbers(array) {
    return array.reduce(function (previous, current) {
        console.log({ previous });
        console.log({ current });
        return previous + current;
    })
}

function finalSaving(prices, available) {
    return prices.reduce(cbPrices, available);
}

function cbPrices(previous, current, index) {
    console.log('rodada ', index + 1);
    console.log({ previous });
    console.log({ current });
    return previous - current.price;
};

let array =[1, 2, 4, 5, 10, 15, 21];

console.log(sumNumbers(array));

let prices =[
    {
        name: 'sabao em po',
        price: 30,
    },
    {
        name: 'cereal',
        price: 12,
    },
    {
        name: 'toalha',
        price: 30,
    },
];

console.log(finalSaving(prices, 150));
