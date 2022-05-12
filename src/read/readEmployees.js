const lib = require('../../lib');
const utils = require('../../utils');
require('console.table');



const readEmployees = async() => {
  console.log('Viewing Employees\n');
  const query = `SELECT * FROM employees`;
  db.query(query, function (err, res) {
      if (err) {
          throw err;
      }
      console.table(res);
      initPrompt();
    });
  }


module.exports = readEmployees