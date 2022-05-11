const src = require('../src')

const initSwitch = (response) => {
  switch (response) {
    case 'View All Departments':
        src.readDepartments();
        console.log(response);
        break;

    case 'Create New Department':
        console.log('create department switch statement has been triggered.')
        src.createDepartment();
        break;

    case "Edit Department":
        src.updateDepartment();
        break;

    case "Delete Department":
        src.deleteDepartment();
        break;

    case "View All Roles":
        src.readRoles();
        break;

    case "Create New Role":
        src.createRole();
        break;

    case "Edit Role":
        src.updateRole();
        break;

    case "Delete Role":
        src.deleteRole();
        break;

    case "View All Employees":
        src.readEmployees();
        break;

    case "Add Employee":
        src.updateEmployee();
        break;

    case "Edit Employee":
        src.updateEmployee();
        break;

    case "Delete Employee":
        src.deleteEmployee();
        break;

    // ends the program
    case "Exit":
        db.end();
        console.log("\nGoodbye!");
        break;
  };
};


module.exports = initSwitch