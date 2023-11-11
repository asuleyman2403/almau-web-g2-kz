
const a1 = 3;
const b1 = 4;
const c1 = 5;

// const p1 = (a1 + b1 + c1) / 2;
// const s1 = Math.sqrt(p1 * (p1 - a1) * (p1 - b1) * (p1 - c1));

const a2 = 6;
const b2 = 8;
const c2 = 10;

// const p2 = (a2 + b2 + c2) / 2;
// const s2 = Math.sqrt(p2 * (p2 - a2) * (p2 - b2) * (p2 - c2));

function getTriangleArea(a, b, c) {
    const p = (a + b + c) / 2;
    const s = Math.sqrt(p * (p - a) * (p - b) * (p - c));

    return s;
}


const s1 = getTriangleArea(a1, b1, c1);
// const s1 = a * b;
const s2 = getTriangleArea(a2, b2, c2);

console.log(s1, s2);

