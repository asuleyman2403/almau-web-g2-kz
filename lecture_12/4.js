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
  },
];

const grades = {
  A: 0,
  'A-': 0,
  'B+': 0,
  B: 0,
  'B-': 0,
  'C+': 0,
  C: 0,
  'C-': 0,
  F: 0,
};

for (let i = 0; i < students.length; i++) {
  const grade = students[i].grade;

  if (grade >= 95) {
    // count++;
    grades['A']++;
  } else if (grade >= 90) {
    grades['A-']++;
  } else if (grade >= 85) {
    grades['B+']++;
  } else if (grade >= 80) {
    grades['B']++;
  } else if (grade >= 75) {
    grades['B-']++;
  } else if (grade >= 70) {
    grades['C+']++;
  } else if (grade >= 65) {
    grades['C']++;
  } else if (grade >= 60) {
    grades['C-']++;
  } else {
    grades['F']++;
  }
}

console.log(grades);


