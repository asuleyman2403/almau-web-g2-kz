
const a = 5;
console.log(a, a.toString());

if (a === 5) {
    console.log('5 ke ten');
}

console.log(typeof a, typeof '5');

if (a == '5' && typeof a == typeof '5') { // a === '5'
    console.log('5ke katan ten');
}

// None = python, null = JavaScript
// NaN = Not a number

if (NaN) {
    console.log('NaN !== false');
}

console.log(Number('asdfasdf asdfasdf'), typeof NaN, Boolean(NaN));

