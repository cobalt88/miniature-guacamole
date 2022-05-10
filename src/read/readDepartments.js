const db = require('../../db/connections');
const src = require('../../src');
const lib = require('../../lib');
const utils = require('../../utils');
require('console.table');


const readDepartments = async() => {
  console.log('Viewing Departments\n');
  const query = `SELECT * FROM departments`;
  const response = await db.query(query, function (err, res) {
      if (err) throw err;
      else {
        console.table(res);
      }
  });
  inquirer.prompt(lib.initialPromptOptions)
};

module.exports = readDepartments