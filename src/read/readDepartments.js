const db = require('../../db');
const utils = require('../../utils');
const inquirer = require('inquirer');
require('console.table');

const readDepartments = async() => {
  const query = `SELECT * FROM departments`;
  db.db.query(query, (err, res) => {
  console.table(res);


  utils.cliNav();
  
 
  });
}

  

module.exports = readDepartments