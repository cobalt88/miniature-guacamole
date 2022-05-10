const lib = require('../lib');
const src = require('../src');
const utils = require('../utils');

const initSwitch = async(response) => {
  switch (response) {
    // case for viewing departments
    case 'View Departments':
        // function for viewing departments
        src.readDepartments();
        break;

    // case for viewing roles
    case 'View Roles':
        // function for viewing roles
        src.readRoles();
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

module.exports = initSwitch