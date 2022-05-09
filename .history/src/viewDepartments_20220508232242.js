const db = require('../db/connection');
const initPrompt = require('./initialPrompt');

const table = require('console.table');


const viewDepartments = async() => {
  const query = `SELECT * FROM departments`;
  const response = db.query(query, function (err, res) {
    if (err) throw err;
  });
  table(response);
  initPrompt();
};

module.exports = viewDepartments