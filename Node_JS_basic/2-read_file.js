const fs = require('fs');

function countStudents(path) {
  let data;

  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = data
    .split('\n')
    .filter((line) => line.trim() !== '');

  const students = lines.slice(1);

  console.log(`Number of students: ${students.length}`);

  const fields = {};

  students.forEach((student) => {
    const studentData = student.split(',');

    const firstname = studentData[0];
    const field = studentData[3];

    if (!fields[field]) {
      fields[field] = [];
    }

    fields[field].push(firstname);
  });

  for (const field in fields) {
    console.log(
      `Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`
    );
  }
}

module.exports = countStudents;
