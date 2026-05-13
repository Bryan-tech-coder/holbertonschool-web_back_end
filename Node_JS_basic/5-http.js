const http = require('http');
const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const lines = data
        .trim()
        .split('\n')
        .filter((line) => line.trim() !== '');

      const students = lines.slice(1);

      let output = `Number of students: ${students.length}`;

      const fields = {};

      students.forEach((line) => {
        const [firstname, , , field] = line.split(',');

        if (!fields[field]) {
          fields[field] = [];
        }

        fields[field].push(firstname);
      });

      for (const field in fields) {
        output += `\nNumber of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`;
      }

      resolve(output);
    });
  });
}

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

  if (request.url === '/') {
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    response.write('This is the list of our students\n');

    countStudents(process.argv[2])
      .then((data) => {
        response.end(data);
      })
      .catch((error) => {
        response.end(error.message);
      });
  } else {
    response.end('Hello Holberton School!');
  }
});

app.listen(1245);

module.exports = app;
