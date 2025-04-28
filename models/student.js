const db = require('../db');

// Add new student
function addStudent(name, grade, callback) {
  const sql = `INSERT INTO students (name, grade) VALUES (?, ?)`;
  db.run(sql, [name, grade], function (err) {
    callback(err, { id: this.lastID });
  });
}

// List all students
function listStudents(callback) {
  const sql = `SELECT * FROM students`;
  db.all(sql, [], (err, rows) => {
    callback(err, rows);
  });
}

module.exports = {
    addStudent,
    listStudents
  };