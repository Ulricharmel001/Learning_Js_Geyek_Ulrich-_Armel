var currencyOne = 100;
var currencyTwo = 0;
var exchangeRate = 3;

function convertCurrency(amount, rate){
    return amount * rate;
}
currencyTwo = convertCurrency(currencyOne, exchangeRate)
console.log(currencyTwo)



// 