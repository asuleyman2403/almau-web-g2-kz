const array = [1, 2, 3, 4, 5];
const arrayTwo = [];
arrayTwo.push(1);
array.push(1);

console.log(array, arrayTwo);
console.log(array.length, arrayTwo.length);

// for (let i = 0; i < array.length; i++) {
//     console.log(array[i]);
// }

array.unshift(6);
console.log(array);

array.sort((a, b) => {
    if (a > b) {
        return -1;
    } else if (a === b) {
        return 0;
    } else {
        return 1;
    }
});

console.log(array);

array.pop();
console.log(array);
array.shift();
console.log(array);
array.reverse();
console.log(array);
let arr = array.concat([1, 2, 3]);
console.log(arr);

let newArray = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= 2) {
        newArray.push(arr[i]);
    }
}

console.log(newArray);


