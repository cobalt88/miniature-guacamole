const src = require('../src');

const initSwitch = async(response) => {
  switch (response) {
    case 'View All Departments':
        src.readDepartments;
        break;

    case 'Create New Department':
        src.readRoles;
        break;

    case "Edit Department":
        src.updateDepartment;
        break;

    case "Delete Department":
        viewEmployeeByDepartment;
        break;

    case "View All Roles":
        src.readRoles;
        break;

    case "Create New Role":
        src.createRole;
        break;

    case "Edit Role":
        src.updateRole;
        break;

    case "Delete Role":
        src.deleteRole;
        break;

    case "View All Employees":
        src.readEmployees();
        break;

    case "Add Employee":
        src.updateEmployee;
        break;

    case "Edit Employee":
        src.updateEmployee;
        break;

    case "Delete Employee":
        src.deleteEmployee;
        break;

    // ends the program
    case "Exit":
        db.end();
        console.log("\nGoodbye!");
        break;
  };
};

initSwitch();

module.exports = initSwitch