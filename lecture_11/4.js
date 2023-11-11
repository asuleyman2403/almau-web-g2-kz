
// y = x ^ 2;

function getParabolaPoints(x) {
    // return x ** 2;
    y = x ** 2;
    return y;
}

const array = [];

for (let i = 0; i <= 100; i++) {
    array.push(getParabolaPoints(i));
}

console.log(array);
