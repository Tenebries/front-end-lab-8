var euro = parseFloat(prompt('Input amount of EURO:'));
var dollar = parseFloat(prompt('Input amount of USD:'));

var euroValue = 33.232;
var dollarValue = 27.124;

if (euro <= 0 || dollar <= 0 || isNaN(euro) || isNaN(dollar)) {
    console.log('Incorrect data');
} else {
    var euroToHryvnia = (euro * euroValue).toFixed(2);
    var euroToDollar = (euroValue / dollarValue).toFixed(3);
    var dollarToHryvnia = (dollar * dollarValue).toFixed(2);

    console.log(euro + ' euros are equal ' + euroToHryvnia + ' UAH, ' + dollar + ' dollars are equal ' + dollarToHryvnia + ' UAH, one euro is equal ' + euroToDollar + ' dollars.');
}