
const array = [1, 2, 3, 4, 5];
const arrayTwo = [1, '2', undefined, null];

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

array.push(6);
console.log(array);
array.unshift(5);
console.log(array);
array.pop();
console.log(array);
array.shift();
console.log(array);
array.sort();
console.log(array);
// array.sort((a, b) => {
//     if (a < b) {
//         return 1;
//     } else if (a === b) {
//         return 0;
//     } else {
//         return -1;
//     }
// });

console.log(array.sort().reverse());
