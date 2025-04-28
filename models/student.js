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

// Update a student
function updateStudent(id, name, grade, callback) {
    const sql = `UPDATE students SET name = ?, grade = ? WHERE id = ?`;
    db.run(sql, [name, grade, id], function (err) {
      callback(err, { changes: this.changes });
    });
  }
  
  // Delete a student
  function deleteStudent(id, callback) {
    const sql = `DELETE FROM students WHERE id = ?`;
    db.run(sql, [id], function (err) {
      callback(err, { changes: this.changes });
    });
  }

module.exports = {
    addStudent,
    listStudents,
    updateStudent,
    deleteStudent
  };