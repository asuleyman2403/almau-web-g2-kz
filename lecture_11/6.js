function getSquare(x) {
    return x ** 2;
}

function calculateParabola(array) {
    const ys = [];

    for (let i = 0; i < array.length; i++) {
        ys.push(getSquare(array[i]));
    }

    return ys;
}

const ys = calculateParabola([1, 2, 3, 4 ,5]);
console.log(ys);
