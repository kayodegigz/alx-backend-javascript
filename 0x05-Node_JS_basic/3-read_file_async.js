/**
 * Parsing a csv file asynchronously with Node
 */
const fs = require('fs');

async function countStudents(path) {
  let data;
  try {
    data = await fs.promises.readFile(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }
  const lineData = data.split('\n')
    .map((student) => student.split(','))
    .filter((student) => student.length === 4 && student[0] !== 'firstname')
    .map((student) => ({
      firstName: student[0],
      lastName: student[1],
      age: student[2],
      field: student[3],
    }));
  const csStudents = lineData
    .filter((student) => student.field === 'CS')
    .map((student) => student.firstName);
  const sweStudents = lineData
    .filter((student) => student.field === 'SWE')
    .map((student) => student.firstName);
  console.log(`Number of students: ${lineData.length}`);
  console.log(`Number of students in CS: ${csStudents.length}. List: ${csStudents.join(', ')}`);
  console.log(`Number of students in SWE: ${sweStudents.length}. List: ${sweStudents.join(', ')}`);
  return { lineData, csStudents, sweStudents };
}

module.exports = countStudents;
