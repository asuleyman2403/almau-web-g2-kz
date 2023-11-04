
let n = 0;
let square = 0;

while (square <= 1000) {
    if (n ** 2 <= 1000 && (n + 1) ** 2 >= 1000) {
        break;
    } else {
        square = n ** 2;
        n++;
    }
}

console.log(square);


