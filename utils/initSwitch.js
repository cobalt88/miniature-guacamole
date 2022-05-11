const read = require('../src/read');
const update = require('../src/update');
const create = require('../src/create');
const deleteStuff = require('../src/delete');

const initSwitch = (response) => {
  switch (response) {
    case 'View All Departments':
        read.readDepartments();
        break;

    case "View All Roles":
        read.readRoles();
        break;

    case "View All Employees":
        read.readEmployees();
        break;

    case "Edit Department":
        update.updateDepartment();
        break;

    case "Edit Employee":
        update.updateEmployee();
        break;

    case "Edit Role":
        update.updateRole();
        break;

    case 'Create New Department':
        create.createDepartment();
        break;

    case "Create New Role":
        create.createRole();
        break;

    case "Add Employee":
        create.updateEmployee();
        break;

    case "Delete Department":
        deleteStuff.deleteDepartment();
        break;

    case "Delete Role":
        deleteStuff.deleteRole();
        break;

    case "Delete Employee":
        deleteStuff.deleteEmployee();
        break;

    // ends the program
    case "Exit":
        exit();
        console.log("\nGoodbye!");
        break;
  };
};


module.exports = initSwitch