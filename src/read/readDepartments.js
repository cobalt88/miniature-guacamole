const lib = require('../../lib');
const db = require('../../db');
const utils = require('../../utils');
const inquirer = require('inquirer');
require('console.table');


const readDepartments = async() => {
  const query = `SELECT * FROM departments`;
  const response = db.db.query(query, function (err, res) {
    console.table(res);
  });

  if(response !== undefined){
    utils.cliNav();
};
  }
  

module.exports = readDepartments