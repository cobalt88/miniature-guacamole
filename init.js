//==================================================
//Global variables and dependencies
//==================================================

const inquirer = require("inquirer");
const db = require("./db");
const rolesArr = [];
const departmentsArr = [];
const employeesArr = [];
const managersArr = [];


//==================================================
//inquirer prompts
//==================================================

const initialPromptOptions = [
  {
    type: "list",
    name: "initial",
    message: "What would you like to do?",
    choices: [
      "View All Departments",
      "Create New Department",
      "Delete Department",
      "Edit Department",
      "View All Roles",
      "Create New Role",
      "Delete Role",
      "Edit Role",
      "View All Employees",
      "Add Employee",
      "Delete Employee",
      "Edit Employee",
      "Exit",
    ],
  },
];
const navigationPrompts = [
  {
    name: "Navigation",
    type: "list",
    message: "Would you like to:",
    choices: ["Return to main menu", "Exit Application"],
  },
];

const confirmPrompt = [
  {
    name: "confirmation",
    type: "confirm",
    message: "Are you sure you would like to complete this action?",
  },
];

/*
==================================================
CREATION PROMPTS
==================================================
*/

const createEmployeeConfirm = [
  {
    type: "confirm",
    name: "addAnother",
    message: "Would you like to add another Employee?"
  }
];

const createEmployeePrompts = [
  {
    type: "input",
    name: "first_name",
    message: "What is the employee's first name?",
  },
  {
    type: "input",
    name: "last_name",
    message: "What is the employee's last name?",
  },
  {
    type: "list",
    name: "roleId",
    message: "What is the employee's role?",
    choices: rolesArr,
  },
  {
    type: "confirm",
    name: "is_manager",
    message: "Is the employee a manager?",
    default: false,
  },
];

const createDepartmentConfirm = 
[
  {
    type: "confirm",
    name: "addAnother",
    message: "Would you like to add another Department?"
  }
];

const createDepartmentPrompts = 
[
  {
    type: "input",
    name: "departmentName",
    message: "What is the name of the new Department?"
  },
  // {
  //   type: 'list',
  //   name: 'departmentManager',
  //   message: 'Who is the Department Manager?',
  //   options: managersArr
  // }
];


const createRoleConfirm = 
[
  {
    type: "confirm",
    name: "addAnother",
    message: "Would you like to add another Role?"
  }
];

const createRolePrompts = 
[
  {
    type: 'input',
    name: 'title',
    message: 'What is the title for this role?'
  },
  {
    type: 'input',
    name: 'salary',
    message: 'What is the base salary for this role?'
  },
  {
    type: 'list',
    name: 'department',
    message: 'What department does this role belong to?',
    options: departmentsArr
  }
]


/*
==================================================
EDIT PROMPTS
==================================================
*/

/*
==================================================
SORT PROMPTS
==================================================
*/


const sortDepartmentsPrompts = [
  {
    type: "list",
    name: "sortDepartments",
    message: "Sort Departments table by:",
    options: ["Index", "ID", "First Name", "Last Name", "Role", "Manager"],
  },
];

const sortEmployeePrompts = [
  {
    type: "list",
    name: "sortEmployees",
    message: "Sort Employees by:",
    options: ["Index", "ID", "First Name", "Last Name", "Manager", "Role"],
  },
];

const sortRolePrompts = [
  {
    type: "list",
    name: "sortRoles",
    message: "Sort Roles By:",
    options: ["Title A-Z", "Title Z-A", "Salary", "ID", "Department"],
  },
];


//==============================================================
// functions to create arrays for dynamic prompt options
//==============================================================

const createRolesArray = async () => {
  let query = `SELECT * FROM roles`;
  try {
    db.db.query(query, async (err, res) => {
      const roles = await res.map((role) => {
        return {
          name: role.title,
          salary: role.salary,
          value: role.id,
        };
      });
      rolesArr.push(...roles);
    });
  } catch (err) {
    console.error(`Error in CreateRolesArray: ${err}`);
  }
};

const createDepartmentsArray = async () => {
  let query = `SELECT * FROM departments`;
  try {
    db.db.query(query, async (err, res) => {
      const departments = await res.map((department) => {
        return {
          name: department.name,
          value: department.id,
        };
      });
      departmentsArr.push(...departments);
    });
  } catch (err) {
    console.error(`Error in createDepartmentsArr ${err}`);
  }
};

const createEmployeeArray = async () => {
  let query = `SELECT * FROM employees`;
  try {
    db.db.query(query, async (err, res) => {
      const employees = await res.map((employee) => {
        return {
          firstName: employee.first_name,
          lastName: employee.last_name,
          role: employee.role_id,
          managerId: employee.manager_id,
          isManager: employee.is_manager,
        };
      });
      employeesArr.push(...employees);
    });
  } catch (err) {
    console.error(err);
  }
};

//===========================================================
//FUNCTIONS TO QUERY THE DB AND OUTPUT TABLES TO THE CONSOLE
//===========================================================
const queryTable = async (query) => {
  db.db.query(query, (err, res) => {
    console.table(res);
    nav();
  });
};

// read/view table functions
const readDepartments = async () => {
  let query = `SELECT * FROM departments`;
  try {
    const response = await queryTable(query);
  } catch (err) {
    console.error(`Error in read Departments: ${err}`);
  }
};

const readEmployees = async () => {
  let query = `SELECT * FROM employees`;
  try {
    queryTable(query);
  } catch (err) {
    console.error(`Error in read employees: ${err}`);
  }
};

const readRoles = async () => {
  let query = `SELECT * FROM roles`;
  try {
    queryTable(query);
  } catch (err) {
    console.error(`Error in read roles: ${err}`);
  }
};
/*
====================================================
CREATE/ADD NEW EMPLOYEE-ROLE-DEPARTMENT TO DB TABLES
====================================================
*/
const createEmployee = async () => {
  try {
    let response = await inquirer.prompt(createEmployeePrompts);
    let query = `INSERT INTO employees (first_name, last_name, role_id, is_manager) VALUES (?, ?, ?, ?)`;
    db.db.query(query, [
      response.first_name,
      response.last_name,
      response.roleId,
      response.is_manager,
    ]),
      async (err, res) => {
        if (!err) {
          console.table(res);
          console.log(
            `${response.first_name} ${response.last_name} has successfully been added to the database.`
          );
        } else {
          return err;
        }
      };
    let confirm = await inquirer.prompt(addEmployeeConfirm);
    if (confirm) {
      return createEmployee();
    } else {
      return nav();
    }
  } catch (err) {
    console.error(`Error in create employee: ${err}`);
  }
};

const createDepartment = async() => {
  try{
    let response = await inquirer.prompt(createDepartmentPrompts);
    let query = `INSERT INTO departments (dep_name) VALUES (?)`;
    db.db.query(query, [response.departmentName]), async(err, res) => {
      if(!err){
        console.table(res);
        console.log(`${response.departmentName} has been successfully added to the Database.`)
      }else{
        console.error(`Error in create department: ${err}`)
      };
    };
    let confirm = await inquirer.prompt(createDepartmentConfirm);
      if(confirm){
        return createDepartment();
      } else {
        return nav();
      }
  }catch(err){
    console.error(`Unexpected error in create department: ${err}`)
  }
};

/*
==================================================
PRIMARY SWITCH STATEMENT FOR MAIN MENU
==================================================
*/

const initSwitch = async (response) => {
  switch (response) {
    case "View All Departments":
      readDepartments();
      break;

    case "View All Roles":
      readRoles();
      break;

    case "View All Employees":
      readEmployees();
      break;

    case "Edit Department":
      updateDepartment();
      break;

    case "Edit Employee":
      updateEmployee();
      break;

    case "Edit Role":
      updateRole();
      break;

    case "Create New Department":
      createDepartment();
      break;

    case "Create New Role":
      createRole();
      break;

    case "Add Employee":
      createEmployee();
      break;

    case "Delete Department":
      deleteDepartment();
      break;

    case "Delete Role":
      deleteRole();
      break;

    case "Delete Employee":
      deleteEmployee();
      break;

    case "Exit":
      const confirm = await inquirer.prompt(confirmPrompt);
      if (confirm) {
        console.log(
          "Thank you for using Employee Tracker, Come back again soon!"
        );
        process.exit(1);
      }
      break;
  }
  return;
};

//==================================================
//MAIN NAVIGATION FUNCTION PRESENT IN ALL WINDOWS
//==================================================

const nav = async () => {
  try {
    const response = await inquirer.prompt(navigationPrompts);
    console.log(response);
    if (response.Navigation === "Return to main menu") {
      init();
    } else {
      const confirm = await inquirer.prompt(confirmPrompt);
      if (confirm) {
        console.log(
          "Thank you for using Employee Tracker, Come back again soon!"
        );
        process.exit(1);
      }
    }
  } catch (err) {
    console.error(err);
  }
};

//==================================================
//CLI INITIALIZATION
//==================================================

const init = async () => {
  try {
    createRolesArray();
    createDepartmentsArray();
    createEmployeeArray();
    const response = await inquirer.prompt(initialPromptOptions);
    initSwitch(response.initial);
  } catch (err) {
    console.error(err);
  }
};

init();
