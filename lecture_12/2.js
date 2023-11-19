const student = {
    'name': 'Assyl',
    'surname': 'Suleiman',
    'grade': 81,
    'yearOfStudy': 1,
    'subjects': ['Introduction to web', 'Object oriented programming', 'Python and algorithmization'],
    'student-sany': 100
}

const keys = Object.keys(student);
// console.log(keys);
// for (let i = 0; i < keys.length; i++) {
//     console.log(keys[i], student[keys[i]]);
// }
const values = Object.values(student);
console.log(values);
const entries = Object.entries(student);
console.log(entries);

delete student.name;
console.log(student);
delete student['student-sany'];
console.log(student);

console.log(student.adsf);
console.log(student);


