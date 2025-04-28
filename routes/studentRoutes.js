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



module.exports = router;
