const db = require('../db');
const utils = require('../utils');
const inquirer = require('inquirer');
const lib = require('../lib');
import { initSwitch } from '../utils/initSwitch';

const nav = async() => {
  try{
    const response = await inquirer.prompt(lib.inquirerPrompts.navigation); 
    if(response === 'Return to main menu'){
      initSwitch(response.initial);
    } else {
      const confirm = await inquirer.prompt(lib.inquirerPrompts.confirm);
      if(confirm){
        console.log("Thank you for using Employee Tracker, Come back again soon!")
        process.exit(1);
      };  
    }
  }catch(err){
    console.error(err)
  }
}

const readDepartments = async() => {
  const query = `SELECT * FROM departments`;
  try{
    db.db.query(query, async(err, res) => {
    console.table(res);
    nav();
  })
  }catch(err){
    console.error(err);
  };
};

const readEmployees = async() => {
  const query = `SELECT * FROM employees`;
  try{
    db.db.query(query, async(err, res) => {
    console.table(res);
    nav();
  })
  }catch(err){
  console.error(err);
  }
};

const readRoles = async() => {
  const query = `SELECT * FROM roles`;
  try{
    db.db.query(query, async(err, res) => {
    console.table(res);
    nav();
  })
  }catch(err){
  console.error(err);
  }
};


module.exports = {
  readDepartments,
  readEmployees,
  readRoles
}