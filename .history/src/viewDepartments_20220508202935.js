const mysql = require('mysql2');
const db = require('./db/connection');


function viewDepartments() {
  // message to user \n provides a line break
  console.log('Viewing Departments\n');
  // SQL query to select all departments
  const query = `SELECT * FROM departments`;
  // grabs the response from the query and runs it through the console.table function
  db.query(query, function (err, res) {
      if (err) throw err;
      // console.table is a function that displays the data in a table
      console.table(res);
      // runs the initialPrompt function
      initPrompt();
  });
};