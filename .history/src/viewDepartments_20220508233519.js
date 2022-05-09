const db = require('../db/connections');
const initPrompt = require('./initialPrompt');

require('console.table');


const viewDepartments = async() => {
  const query = `SELECT * FROM departments`;

  console.log('made it into the view departemnts function')
  const response = db.query(query, function (err, res) {
    if (err) throw err;
    console.table(response);
    initPrompt();
  });
  
};

module.exports = viewDepartments