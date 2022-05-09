const db = require('../db/connection');
const initPrompt = require('./initialPrompt');

require('console.table');


const viewDepartments = async() => {
  const query = `SELECT * FROM departments`;
  const response = db.query(query, function (err, res) {
    if (err) throw err;
  });
  console.table(response);
  initPrompt();
};

module.exports = viewDepartments