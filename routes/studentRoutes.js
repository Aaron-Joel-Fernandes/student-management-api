const express = require('express');
const router = express.Router();
const student = require('../models/student');

// Add a student
router.post('/', (req, res) => {
  const { name, grade } = req.body;
  student.addStudent(name, grade, (err, result) => {
    if (err) return res.status(500).send(err.message);
    res.status(201).json({ message: 'Student added', id: result.id });
  });
});

// List students
router.get('/', (req, res) => {
  student.listStudents((err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
});

// Update student
router.put('/:id', (req, res) => {
    const { name, grade } = req.body;
    const { id } = req.params;
    student.updateStudent(id, name, grade, (err, result) => {
      if (err) return res.status(500).send(err.message);
      res.json({ message: 'Student updated', changes: result.changes });
    });
  });
  
  // Delete student
  router.delete('/:id', (req, res) => {
    const { id } = req.params;
    student.deleteStudent(id, (err, result) => {
      if (err) return res.status(500).send(err.message);
      res.json({ message: 'Student deleted', changes: result.changes });
    });
  });

module.exports = router;
