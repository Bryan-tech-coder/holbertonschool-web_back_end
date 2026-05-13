import readDatabase from '../utils.js';

class StudentsController {
  static getAllStudents(req, res) {
    const databasePath = process.argv[2];

    readDatabase(databasePath)
      .then((fields) => {
        const output = [];
        output.push('This is the list of our students');

        const sortedFields = Object.keys(fields).sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

        for (const field of sortedFields) {
          output.push(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }

        res.status(200).send(output.join('\n'));
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }

  static getAllStudentsByMajor(req, res) {
    const { major } = req.params;

    if (major !== 'CS' && major !== 'SWE') {
      res.status(500).send('Major parameter must be CS or SWE');
      return;
    }

    const databasePath = process.argv[2];

    readDatabase(databasePath)
      .then((fields) => {
        const studentList = fields[major] || [];
        res.status(200).send(`List: ${studentList.join(', ')}`);
      })
      .catch(() => {
        res.status(500).send('Cannot load the database');
      });
  }
}

export default StudentsController;
