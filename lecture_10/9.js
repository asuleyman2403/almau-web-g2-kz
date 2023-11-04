let mult = 1;
let array = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}

for (let i = 0; i < array.length; i++) {
    mult *= array[i];
}

console.log(sum, mult);

