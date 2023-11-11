const array = [1, 2, 3, 4, 5];

console.log(array.reverse());

console.log(array.join(','));

console.log([1, 2, 3].join(' ').split(' ').join(', '));


const palyndrome = 'kazak';
const keryPalyndrome = palyndrome.split('').reverse().join('');

if (keryPalyndrome === palyndrome) {
    console.log('PALYNDROME');
} else {
    console.log('PALYNDROME EMES');
}



