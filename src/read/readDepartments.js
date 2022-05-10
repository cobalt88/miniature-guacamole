const db = require('../../db/connections');
const src = require('../../src');
const lib = require('../../lib');
const utils = require('../../utils');
require('console.table');


function viewDepartments() {
  console.log('Viewing Departments\n');
  const query = `SELECT * FROM departments`;
  db.query(query, function (err, res) {
      if (err) throw err;
      return console.table(res);
  });
};

module.exports = viewDepartments