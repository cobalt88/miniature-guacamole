// const viewDepartments = require('../src/viewDepartments');
// const db = require('../db/connection');
const inquirer = require('inquirer');

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

const initPrompt = async () => {

  const response = await inquirer.prompt(initialPromptOptions);
    initSwitch(response);
};


module.exports = initPrompt