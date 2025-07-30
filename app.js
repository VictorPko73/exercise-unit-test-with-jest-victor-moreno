const fromEuroToDollar = function(valueInEuro){
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar){
    let valueInYen = valueInDollar * 156.5;
    return valueInYen;
}

const sum = (a,b) => {
    return a + b
}

const fromYenToPound = function(valueInYen){
    let valuePound = valueInYen * 0.87
    return valuePound
}

console.log(sum(7, 3));

module.exports = {sum, fromEuroToDollar, fromDollarToYen,fromYenToPound};


