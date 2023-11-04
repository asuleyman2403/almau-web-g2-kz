let sum = 0;
let n = 0;

while (sum <= 10000) {
    sum += n;
    n++;
}

console.log(n, sum);

sum = 0;
n = 0;

do {
    n++;
    sum += n;
} while (sum <= 10000);

console.log(n, sum);

