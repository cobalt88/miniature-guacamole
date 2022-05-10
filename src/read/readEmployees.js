const db = require('../../db/connections');
const lib = require('../../lib');
const utils = require('../../utils');
require('console.table');



const readEmployees = async() => {
  console.log('read employees has been called');
}

readEmployees();

module.exports = readEmployees