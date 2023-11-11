let something = 5;
let array = [1, 2, 3];

// taza functiya = pure function
function calculateArea(array) {
    let sum = 0;
    
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }

    return sum;
}

// void function
function printSomething(){
    something = 10;
}

console.log(something);
printSomething();
console.log(something);
