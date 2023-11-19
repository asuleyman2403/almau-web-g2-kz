const students = [
    {
        name: 'Korkem',
        grade: 80,
    },
    {
        name: 'Alikhan',
        grade: 85,
    },
    {
        name: 'Aruzhan',
        grade: 95,
    },
    {
        name: 'Nurakhmet',
        grade: 90,
    }
]

let sum = 0;
for (let i = 0; i < students.length; i++) {
    sum += students[i].grade;
}
let average = sum / 3;
console.log(average);




