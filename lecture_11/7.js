
function getParabola(x) {
    return x ** 2;
}

function getHyperbola(x) {
    return x ** 3;
}

function getSin(x) {
    return Math.sin(x);
}


function calculeGraphicPoints(array, graphicFunction) {
    const ys = [];

    for (let i = 0; i < array.length; i++) {
        ys.push(graphicFunction(array[i]));
    }

    return ys;
}

const array = [1, 2, 3, 4, 5];
console.log(calculeGraphicPoints(array, getParabola));
console.log(calculeGraphicPoints(array, getHyperbola));
console.log(calculeGraphicPoints(array, getSin));

