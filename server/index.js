const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// MySQL Connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'PurrfectMatch',
  database: 'PurrfectMatch',
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('MySQL connection error: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});

// Your Express routes and logic go here

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
