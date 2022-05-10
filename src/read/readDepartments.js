const db = require('../../db/connections');
const initPrompt = require('./initialPrompt');

require('console.table');


function viewDepartments() {
  console.log('Viewing Departments\n');
  const query = `SELECT * FROM departments`;
  db.query(query, function (err, res) {
      if (err) throw err;
      console.table(res);
      initPrompt();
  });
};

module.exports = viewDepartments