const db = require('../../db/connections');
const lib = require('../../lib');
require('console.table');


const readDepartments = async() => {
  console.log('Viewing Departments\n');
  const query = `SELECT * FROM departments`;
  const response = db.query(query, function (err, res) {
    console.table(response);
  });
};

module.exports = readDepartments