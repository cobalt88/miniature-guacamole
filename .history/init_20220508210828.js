const initPrompt = require('./src/initialPrompt');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const express = require('express');
const db = require('./db/connection');
require('console.table');


const initPrompt = async () => {
  const response = await inquirer.prompt(
    {
        type: 'list',
        //  named used for initialPrompt function 
        name: 'initial',
        message: "What would you like to do?",
        choices: [
          "View Departments",
          "View Roles",
          "View Employees",
          "View Employees by Department",
          "Add Employee",
          "Remove Employees",
          "Update Employee Role",
          "Add New Role",
          "Add New Department",
          "Remove Department",
          "Remove A Role",
          "End"
        ]
        // parameter for initialPrompt function is named above in the inquirer.prompt function
      }

  );

  console.log(response);
  }

initPrompt();