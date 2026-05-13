const express = require('express');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data.trim().split('\n');
      const students = lines.slice(1).filter((line) => line.trim() !== '');

      const result = [];
      result.push(`Number of students: ${students.length}`);

      const fields = {};
      students.forEach((line) => {
        const [firstname, , , field] = line.split(',');
        if (!fields[field]) {
          fields[field] = [];
        }
        fields[field].push(firstname);
      });

      for (const field in fields) {
        if (Object.prototype.hasOwnProperty.call(fields, field)) {
          result.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
      }

      resolve(result.join('\n'));
    });
  });
}

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  res.write('This is the list of our students\n');
  countStudents(process.argv[2])
    .then((data) => {
      res.end(data);
    })
    .catch(() => {
      res.end('Cannot load the database');
    });
});

app.listen(1245);

module.exports = app;
