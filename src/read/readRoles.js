const db = require('../../db/connections');
const src = require('../../src');
const lib = require('../../lib');
const utils = require('../../utils');
require('console.table');

const readRoles = async() => {
  console.log(
    'read roles has been called'
  )
}

module.exports = readRoles