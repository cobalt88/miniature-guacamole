const src = require('../src');
const utils = require('../utils');

export const initSwitch = async(response) => {
  switch (response) {
    case 'View All Departments':
        src.readData.readDepartments();
        break;

    case "View All Roles":
        src.readData.readRoles();
        break;

    case "View All Employees":
        src.readData.readEmployees()
        break;

    // case "Edit Department":
    //     update.updateDepartment();
    //     break;

    // case "Edit Employee":
    //     update.updateEmployee();
    //     break;

    // case "Edit Role":
    //     update.updateRole();
    //     break;

    // case 'Create New Department':
    //     create.createDepartment();
    //     break;

    // case "Create New Role":
    //     create.createRole();
    //     break;

    // case "Add Employee":
    //     create.updateEmployee();
    //     break;

    // case "Delete Department":
    //     deleteStuff.deleteDepartment();
    //     break;

    // case "Delete Role":
    //     deleteStuff.deleteRole();
    //     break;

    // case "Delete Employee":
    //     deleteStuff.deleteEmployee();
    //     break;

    // ends the program
    case "Exit":
        const confirm = await inquirer.prompt(lib.inquirerPrompts.confirm);
        if(confirm){
          console.log("Thank you for using Employee Tracker, Come back again soon!")
          process.exit(1);
        };  
        break;
  };
  return 
};

module.exports = initSwitch
