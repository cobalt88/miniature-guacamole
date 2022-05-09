const mysql = require('mysql2');
const db = require('../db/connection');
require('console.table');


const viewDepartments = async() => {
  const query = `SELECT * FROM departments`;
  db.query(query, function (err, res) {
      if (err) throw err;
      console.table(res);
      initPrompt();
  });
};

module.exports = viewDepartments