// initial modules
const mysql = require('mysql2');
// require('dotenv').config();

// connect to database
const db = mysql.createConnection({
    // location of database
    host: 'localhost',
    // username
    user: 'root',
    // password
    password: 'B8ea6f88**',
    // database name
    database: "employee_data"
},
console.log('Connected to database')
);

module.exports = db;