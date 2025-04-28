const express = require('express');
const app = express();
const studentRoutes = require('./routes/studentRoutes');

app.use(express.json()); // Parse JSON bodies

app.use('/students', studentRoutes);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
