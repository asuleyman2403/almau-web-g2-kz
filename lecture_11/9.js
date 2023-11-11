
// const array = ['Damir', 'Amirsultan', 'Korkem', 'Alikhan'];

const stundentter = 'Damir, Amirsultan, Korkem, Alikkhan';

const name = 'Assyl';
const surname = 'Suleiman';
const fullName = name + ' ' + surname;

console.log(fullName);

if (fullName.includes('A')) {
    console.log('A bar');
} else {
    console.log('A jok');
}

const student = 'Amirsultan';
const kishiStudentter = stundentter.toLowerCase();
if (kishiStudentter.includes(student.toLowerCase())) {
    console.log(`${student} osy synypta bar`);
} else {
    console.log('onday student jok');
}

console.log(student.toUpperCase());
