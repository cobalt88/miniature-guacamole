const mysql = require('mysql2');
const inquirer = require('inquirer');
const express = require('express');
const db = require('./db/connection');
require('console.table');


const init = () => {
  initPrompt();
}

const initialPromptOptions =

  [
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
  ];

const initPrompt = () => {

  const response = inquirer.prompt(initialPromptOptions);



  switch (response) {
      // case for viewing departments
      case 'View Departments':
          // function for viewing departments
          viewDepartments();
          break;
  
      // case for viewing roles
      case 'View Roles':
          // function for viewing roles
          viewRoles();
          break;
  
      // case for choices
      case "View Employees":
          // function for viewing employees
          viewEmployee();
          break;
  
      case "View Employees by Department":
          // function for viewing employees by department
          viewEmployeeByDepartment();
          break;
  
      case "Add Employee":
          // function for adding employee
          addEmployee();
          break;
  
      case "Remove Employees":
          // function for removing employee
          removeEmployee();
          break;
  
      case "Update Employee Role":
          // function for updating employee role
          updateEmployeeRole();
          break;
  
      case "Add New Role":
          // function for adding new role
          addNewRole();
          break;
  
      case "Add New Department":
          // function for adding new department
          addNewDepartment();
          break;
  
      case "Remove Department":
          // function for removing department
          removeDepartment();
          break;
  
      case "Remove A Role":
          // function for removing role
          removeARole();
          break;
  
      // ends the program
      case "End":
          db.end();
          console.log("\nGoodbye!");
          break;
  };
};

init();
