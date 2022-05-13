import { initSwitch } from './utils/initSwitch';
const inquirer = require('inquirer');
const lib = require('./lib');
const src = require('./src');



// const initSwitch = async(response) => {
//   switch (response) {
//     case 'View All Departments':
//         src.readData.readDepartments();
//         break;

//     case "View All Roles":
//         src.readData.readRoles();
//         break;

//     case "View All Employees":
//         src.readData.readEmployees()
//         break;

//     case "Edit Department":
//         update.updateDepartment();
//         break;

//     case "Edit Employee":
//         update.updateEmployee();
//         break;

//     case "Edit Role":
//         update.updateRole();
//         break;

//     case 'Create New Department':
//         create.createDepartment();
//         break;

//     case "Create New Role":
//         create.createRole();
//         break;

//     case "Add Employee":
//         create.updateEmployee();
//         break;

//     case "Delete Department":
//         deleteStuff.deleteDepartment();
//         break;

//     case "Delete Role":
//         deleteStuff.deleteRole();
//         break;

//     case "Delete Employee":
//         deleteStuff.deleteEmployee();
//         break;

//     case "Exit":
//         const confirm = await inquirer.prompt(lib.inquirerPrompts.confirm);
//         if(confirm){
//           console.log("Thank you for using Employee Tracker, Come back again soon!")
//           process.exit(1);
//         };  
//         break;
//   };
//   return 
// };

const init = async() => {
  const response =  await inquirer.prompt(lib.inquirerPrompts.initialPromptOptions);
  console.log(response.initial);
  initSwitch(response.initial);
};


init();

module.exports = init