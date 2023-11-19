const student = {
    'name': 'Assyl',
    'surname': 'Suleiman',
    'grade': 81,
    'yearOfStudy': 1,
    'subjects': ['Introduction to web', 'Object oriented programming', 'Python and algorithmization'],
}

// { key: value}

const subject = {
    'name': 'HTML, CSS jane JavaScripty arkyly web-azirleyge kirispe',
    'code': 'SDT 1008',
    'lector': "Assyl Suleiman",
    'studentterSany': 34,
    'mamandyktar': ['Software Engineering', 'Project Management', 'Information Systems'],
}

// console.log(subject);
console.log(subject.name);
console.log(subject.lector);
subject.lector = 'Lector Lector';
console.log(subject, subject.lector);

const subject2 = {
    name: 'Python',
    code: 'SDT 1005',
    lector: 'Python Tutor',
    studentterSany: 34,
    mamandyktar: ['Software Engineering'],
    1: 1,
    'studentter-sany': 100
}

console.log(subject2);
console.log(subject2['studentter-sany']);

const field = 'name';
console.log(student[field]);
const killter = ['name', 'surname', 'grade'];
for (let field of killter) {
    console.log(student[field]);
}

for (let i = 0; i < killter.length; i++) {
    // student.surname
    console.log(student[killter[i]]);
}


