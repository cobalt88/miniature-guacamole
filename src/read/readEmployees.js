const db = require('../../db/connections');
const src = require('../../src');
const lib = require('../../lib');
const utils = require('../../utils');
require('console.table');



const readEmployees = async() => {
  console.log('read employees has been called');
}

module.exports = readEmployees