const fs = require('fs');

module.exports = function countStudents(path) {
  if (!(fs.existsSync(path))) {
    throw Error('Cannot load the database');
  }

  const data = fs.readFileSync(path, 'utf8');
  const fileData = data.split('\n')
    .map((line) => line.split(','))
    .filter((line) => line.length === 4 && line[0] !== 'firstname')
    .map((data) => ({
      firstName: data[0],
      lastName: data[1],
      age: data[2],
      field: data[3],
    }));
  const sweField = fileData
    .filter((data) => data.field === 'SWE')
    .map((data) => data.firstName);
  const csField = fileData
    .filter((data) => data.field === 'CS')
    .map((data) => data.firstName);
  console.log(`Number of students: ${fileData.length}`);
  console.log(`Number of students in CS: ${csField.length}. List: ${csField.join(', ')}`);
  console.log(`Number of students in SWE: ${sweField.length}. List: ${sweField.join(', ')}`);
};
