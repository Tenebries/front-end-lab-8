var a = parseFloat(prompt('Input first side of triangle:'));
var b = parseFloat(prompt('Input second side of triangle:'));
var c = parseFloat(prompt('Input last side of triangle:'));
var type;

if (a + b <= c || a + c <= b ||  b + c <= a || isNaN(a) || isNaN(b) || isNaN(c)) {
    console.log('Incorrect data')
} else {
    var p = (a + b + c) / 2;
    var square = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    if ((square % 1) !== 0) {
        square = square.toFixed(2);
    }

    if (a * a === b * b + c * c || b * b === a * a + c * c || c * c === a * a + b * b) {
        type = 'right';
    } else if (a === b && b === c && a === c) {
        type = 'equilateral';
    } else if (a === b || b === c || c === a) {
        type = 'isosceles';
    } else if (a !== b && a !== c && b !== c) {
        type = 'scalene';
    } else {
        type = 'Incorrect data';
    }

    console.log('Type of triangle is ' + type + ' triangle and square is ' + square);
}