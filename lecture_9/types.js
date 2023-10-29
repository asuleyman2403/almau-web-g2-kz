let num = 5;
console.log(typeof num);

num = 'abc';
console.log(typeof num);

num = '5';
console.log(typeof num);

let two = Number(num);
console.log(typeof two, two, num, '5' * 1, Number(5).toString(), typeof Number(5).toString());

console.log(Number('abc'), typeof NaN, Infinity, -Infinity, Math.PI, Math.E, Math.sqrt(4));
console.log(2 ** 3);

console.log(Boolean(5), Boolean(0.1), Boolean(-1));
console.log(Boolean(''), Boolean('a'));
