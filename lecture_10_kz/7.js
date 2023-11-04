let kvadrat = 0;
let n = 0;
while (true) {
  const sqr = n ** 2;

  if (sqr < 1000 && (n + 1) ** 2 >= 1000) {
    console.log(sqr);
    break;
  }

  n++;
}

// && JavaScript a && b. Python a and b
// || JavaScript a || b. Python a or b
// ! inversiya
