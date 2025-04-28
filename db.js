const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database (will create if not exists)
const db = new sqlite3.Database('./students.db', (err) => {
  if (err) {
    console.error('Error opening database', err);
  } else {
    console.log('Connected to SQLite database');
  }
});

// Create Students table if it doesn't exist
db.run(`CREATE TABLE IF NOT EXISTS students (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name TEXT NOT NULL,
  grade TEXT NOT NULL
)`);

module.exports = db;
