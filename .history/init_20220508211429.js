// const initPrompt = require('./src/initialPrompt');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const express = require('express');
const db = require('./db/connection');
require('console.table');


inquirer.prompt(
    {
        type: 'list',
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
      }

  );

  console.log(response);

