const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'B8ea6f88**',
    database: "employee_data"
},
console.log('Connected to database')
);

module.exports = db;
