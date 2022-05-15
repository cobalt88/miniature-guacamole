//==================================================
//Global variables and dependencies
//==================================================

const inquirer = require("inquirer");
const db = require("./db");
let rolesArr = [];
let departmentsArr = [];
let departmentOptions = [];
let employeesArr = [];
let managersArr = [];


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
    type: 'input',
    name: 'department',
    message: 'What department does this role belong to? Remember to input department by ID# not by name.'
  }
]


/*
==================================================
EDIT PROMPTS
==================================================
*/
const editAnotherValue = 
[
  {
    type: 'confirm',
    name: 'editAnother',
    message: 'Would you like to update another value?'
  }
];

const editEmployeePrompt = 
[
  {
    type: 'input',
    name: 'employee',
    message: 'Enter the ID number of the employee you would like to edit'
  },
  {
    type: 'list',
    name: 'options',
    message: 'Which value would you like to edit?',
    choices: [
      'First Name',
      'Last Name',
      'Role ID',
      'Manager Status'
    ]
  },
  {
    type: 'input',
    name: 'newValue',
    message: 'Enter new value'
  }
];

const editRolePrompts = 
[
  {
    type: 'input',
    name: 'role',
    message: 'Enter the ID number of the role you would like to edit'
  },
  {
    type: 'list',
    name: 'editOptions',
    message: 'What value would you like to change?',
    choices: [
      'Title',
      'Base Salary'
    ]
  },
  {
    type: 'input',
    name: 'newValue',
    message: 'Enter new value'
  }
];

const editDepartmentPrompts = 
[
  {
    type: 'input',
    name: 'department',
    message: 'Enter the ID number of the department you would like to edit'
  }
];

/*
==================================================
DELETE PROMPTS
==================================================
*/
const deleteConfirm = 
[
  {
    type: 'confirm',
    name: 'deleteConfirm',
    message: 'Would you like to delete another?'
  }
];

const deleteEmployeesPrompt = 
[
  {
    type: 'input',
    name: 'employee',
    message: 'Enter the ID number of the employee you would like to delete.'
  }
];

const deleteRolePrompts = 
[
  {
    type: 'input',
    name: 'role',
    message: 'Enter the ID number of the role you would like to remove'
  }
];

const deleteDepartmentPrompts = 
[
  {
    type: 'input',
    name: 'department',
    message: 'Enter the id number of the department you would like to delete'
  }
];

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
        rolesArr = roles
      });
      
    });
  } catch (err) {
    console.error(`Unexpected error in CreateRolesArray: ${err}`);
  }
};

const createDepartmentsArray = async () => {
  let query = `SELECT * FROM departments`;
  try {
    db.db.query(query, async (err, res) => {
      const departments = await res.map((department) => {
        return {
          id: department.id,
          name: department.dep_name,
          value: department.id,
        };
      });
      departmentsArr = departments;
      let options = departmentsArr.map(x => (x.name));
      departmentOptions = options;
    });
  } catch (err) {
    console.error(`Unexpected error in createDepartmentsArr ${err}`);
  }
};

const createEmployeeArray = async () => {
  let query = `SELECT * FROM employees`;
  try {
    db.db.query(query, async (err, res) => {
      const employees = await res.map((employee) => {
        return {
          id: employee.id,
          firstName: employee.first_name,
          lastName: employee.last_name,
          role: employee.role_id,
          managerId: employee.manager_id,
          isManager: employee.is_manager,
        }
        
      });
      employeesArr = employees
    });
  } catch (err) {
    console.error(`Unexpected error in create employeeArr: ${err}`);
  }
};
/*
===============================================================
VIEW FUNCTIONS TO QUERY THE DB AND OUTPUT TABLES TO THE CONSOLE
===============================================================
*/

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
    nav();
  }
};

const readEmployees = async () => {
  let query = `SELECT * FROM employees`;
  try {
    queryTable(query);
  } catch (err) {
    console.error(`Error in read employees: ${err}`);
    nav();
  }
};

const readRoles = async () => {
  let query = `SELECT * FROM roles`;
  try {
    queryTable(query);
  } catch (err) {
    console.error(`Error in read roles: ${err}`);
    nav();
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
    db.db.query(
      query,
      [
        response.first_name,
        response.last_name,
        response.roleId,
        response.is_manager,
      ],
      async (err, res) => {
        if (!err) {
          console.table(res);
          console.log(
            `${response.first_name} ${response.last_name} has successfully been added to the database.`
          );
        } else {
          return err;
        }
        let confirm = await inquirer.prompt(createEmployeeConfirm);
        if (confirm.addAnother) {
          console.log(confirm);
          return createEmployee();
        } else {
          return nav();
        }
      }
    );
  } catch (err) {
    console.error(`Error in create employee: ${err}`);
    nav();
  }
};

const createDepartment = async () => {
  try {
    let response = await inquirer.prompt(createDepartmentPrompts);
    let query = `INSERT INTO departments (dep_name) VALUES (?)`;
    db.db.query(query, [response.departmentName], async (err, res) => {
      if (!err) {
        console.table(res);
        console.log(
        `${response.departmentName} has been successfully added to the Database.`
        );
      } else {
        console.error(`Error in create department: ${err}`);
      }
      let confirm = await inquirer.prompt(createDepartmentConfirm);
      if (confirm.addAnother) {
        return createDepartment();
      } else {
        return nav();
      }
    });
  } catch (err) {
    console.error(`Unexpected error in create department: ${err}`);
    nav();
  }
};

const createRole = async() => {
  try{
    console.table(departmentsArr);
    let query = `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`;
    let response = await inquirer.prompt(createRolePrompts);
    console.log(response);
    db.db.query(query, [
      response.title,
      response.salary,
      parseInt(response.department)
    ], 
    async(err, res) => {
      if (!err) {
        console.table(res);
        console.log(
        `${response.title} has been successfully added to the Database.`
        );
      } else {
        console.error(`Error in createRole Query Function: ${err}`);
      }
      let confirm = await inquirer.prompt(createRoleConfirm);
      if (confirm.addAnother) {
        return createRole();
      } else {
        return nav();
      }
    });
  }catch(err){
    console.log(`Unexpected Error in createRole: ${err}`);
    nav();
  }
}

/*
====================================================
DELETE EMPLOYEE-ROLE-DEPARTMENT
====================================================
*/

const deleteRole = async () => {
  try {
    console.table(rolesArr);
    let response = await inquirer.prompt(deleteRolePrompts);
    let confirm = await inquirer.prompt(confirmPrompt);

    if (confirm.confirmation) {
      let roleId = parseInt(response.role);
      let query = `DELETE FROM roles WHERE id = ?`;
      db.db.query(query, roleId, async (err, res) => {
        if (!err) {
          console.table(res);
          console.log(
            `Role with id: ${roleId} has been deleted from the database. Reminder: Edit the roles of any employees who may have been assigned to this role.`
          );
          createRolesArray();
          let another = await inquirer.prompt(deleteConfirm);
          if (another.deleteConfirm) {
            return deleteRole();
          } else {
            nav();
          }
        }else{
          console.error(err);
        }
      });
    } else {
      nav();
    }
  } catch (err) {
    console.error(`Unexpected error found in deleteRole: ${err}`);
    nav();
  }
};

const deleteEmployee = async() => {
  try{
    
    console.table(employeesArr);
    let response = await inquirer.prompt(deleteEmployeesPrompt);
    let confirm = await inquirer.prompt(confirmPrompt);

    if (confirm.confirmation){
    let employeeId = parseInt(response.employee);
    let query = `DELETE FROM employees WHERE id = ?`;
    db.db.query(query, employeeId, async (err, res) => {
      if (!err) {
        console.table(res);
        console.log(
          `Employee with id: ${employeeId} has been deleted from the database. Reminder: Edit the roles of any employees who may have been assigned to this role.`
        );
        createEmployeeArray();
        let another = await inquirer.prompt(deleteConfirm);
        if (another.deleteConfirm) {
          
          return deleteEmployee();
        } else {
          nav();
        }
      }else{
        console.error(err);
      }
    });
  } else {
    nav();
  }
  }catch(err) {
    console.error(`Unexpected error found in deleteEmployee:${err}`);
    nav();
  }
};

const deleteDepartment = async() => {
  try{
    console.table(departmentsArr);
    let response = await inquirer.prompt(deleteDepartmentPrompts);
    let confirm = await inquirer.prompt(confirmPrompt);

    if (confirm.confirmation){
    let departmentId = parseInt(response.department);
    let query = `DELETE FROM departments WHERE id = ?`;
    db.db.query(query, departmentId, async (err, res) => {
      if (!err) {
        console.table(res);
        console.log(
          `Department with id: ${departmentId} has been deleted from the database. Reminder: Edit the roles of any employees who may have been assigned to this role.`
        );
        createDepartmentsArray();
        let another = await inquirer.prompt(deleteConfirm);
        if (another.deleteConfirm) {
          
          return deleteDepartment();
        } else {
          nav();
        }
      }else{
        console.error(err);
      }
    });
  } else {
    nav();
  }

  }catch(err){
    console.error(`Unexpected Error found in deleteRole: ${err}`);
    nav();
  }
};

/*
====================================================
EDIT EMPLOYEE-ROLE-DEPARTMENT
====================================================
*/

const updateEmployee = async() => {
  try{
    let response = inquirer.prompt(editEmployeePrompt)
    console.log('Hey there, this feature is not quite done yet but is under development. Check back later, Thank you for using Employee Tracker!');
   nav();
  }catch(err){
    console.error(`Unexpected Error found in updateEmployee: ${err}`);
    nav();
  }
};

const updateRole = async() => {
  try{
    console.log('Hey there, this feature is not quite done yet but is under development. Check back later, Thank you for using Employee Tracker!');
    nav();
  }catch(err){
    console.error(`Unexpected Error found in editRole: ${err}`);
    nav();
  }
};

const updateDepartment = async() => {
  try{
    console.log('Hey there, this feature is not quite done yet but is under development. Check back later, Thank you for using Employee Tracker!');
    nav();
  }catch(err){
    console.error(`Unexpected Error found in updateDepartment: ${err}`);
    nav();
  }
};

/*
====================================================
SORT EMPLOYEE-ROLE-DEPARTMENT
====================================================
*/

const sortEmployeeTable = async() => {
  try{
    console.log('Hey there, this feature is not quite done yet but is under development. Check back later, Thank you for using Employee Tracker!');
    nav();
  }catch(err) {
    console.error(`Unexpected error found in sortEmployeeTable:${err}`);
    nav();
  }
};

const sortDepartmentsTable = async() => {
  try{
    console.log('Hey there, this feature is not quite done yet but is under development. Check back later, Thank you for using Employee Tracker!');
    nav();
  }catch(err) {
    console.error(`Unexpected error found in sortDepartmentsTable:${err}`);
    nav();
  }
};

const sortRolesTable = async() => {
  try{
    console.log('Hey there, this feature is not quite done yet but is under development. Check back later, Thank you for using Employee Tracker!');
    nav();
  }catch(err) {
    console.error(`Unexpected error found in sortRolesTable:${err}`);
    nav();
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
