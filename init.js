const inquirer = require('inquirer');
const db = require('./db')
let rolesArr = [];
let departmentsArr = [];
let employeesArr = [];

const initialPromptOptions =
[
  {
      type: 'list',
      name: 'initial',
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
        "View Employees",
        "Add Employee",
        "Delete Employee",
        "Edit Employee",
        "Exit"
      ]
    }
];  
 const navigationPrompts = 
[
  {
    name: 'Navigation',
    type: 'list',
    message: 'Would you like to:',
    choices: [
      'Return to main menu',
      'Exit Application'
    ]
  }
];
 
const confirmPrompt = 
[
  {
    name: "confirmation",
    type: 'confirm',
    message: "Are you sure you would like to complete this action?"
  }
];

const addEmployeeConfirm = 
[
  {
    type: 'confirm',
    name: 'addAnother',
    message: 'Would you like to add another employee?'
  }
]

const createEmployeePrompts = 
[
  {
    type: 'input',
    name: 'first_name',
    message: "What is the employee's first name?"
  },
  {
    type: 'input',
    name: 'last_name',
    message: "What is the employee's last name?"
  },
  {
    type: 'list',
    name: 'roleId',
    message: "What is the employee's role?",
    choices: rolesArr
  },
  {
    type: 'input',
    name: 'managerId',
    message: "What is the employee's manager ID?",
  },
  {
    type: 'confirm',
    name: 'is_manager',
    message: "Is the employee a manager?",
    default: false
  },
]


const readDepartments = async() => {
  const query = `SELECT * FROM departments`;
  try{
    db.db.query(query, async(err, res) => {
    console.table(res);
    nav();
  })
  }catch(err){
    console.error(err);
  };
};

const readEmployees = async() => {
  const query = `SELECT * FROM employees`;
  try{
    db.db.query(query, async(err, res) => {
    console.table(res);
    nav();
  })
  }catch(err){
  console.error(err);
  }
};

const readRoles = async() => {
  try{
    const query = `SELECT * FROM roles`;
    db.query(query, async(err, res) => {
      const roles = res.map(role => {
        return {
          name: role.title,
          salary: role.salary,
          value: role.id
        }
      });
      rolesArr.push(...roles);
      console.table(res)
    });
    
  }catch(err){
    console.error(err);
  }
};

const createRolesArray = async() => {
  try{
    const query = `SELECT * FROM roles`;
    db.query(query, async(err, res) => {
      const roles = await res.map(role => {
        return {
          name: role.title,
          salary: role.salary,
          value: role.id
        }
      });
      rolesArr.push(...roles);
    });
    
  }catch(err){
    console.error(err);
  }
}

const createDepartmentsArray = async() => {
  try{
    const query = `SELECT * FROM departments`;
    db.query(query, async(err, res) => {
      const departments = await res.map(department => {
        return{
          name: department.name,
          value: department.id
        };
      });
      departmentsArr.push(...departments);
    });
  }catch(err){
    console.error(err);
  };
};

const createEmployeeArray = async() => {
  try{
    const query = `SELECT * FROM employees`;
    db.query(query, async(err, res) => {
      const employees = await res.map(employee => {
        return{
          firstName: employee.first_name,
          lastName: employee.last_name,
          role: employee.role_id, 
          managerId: employee.manager_id,
          isManager: employee.is_manager
        };
      });
      employeesArr.push(...employees)
    });
  }catch(err){
    console.error(err);
  };
};

const createEmployee = async() => {
  try{
    let response = await inquirer.prompt(createEmployeePrompts);
    let query = `INSERT INTO employees (first_name, last_name, role_id, manager_id, is_manager) VALUES (?, ?, ?, ?, ?)`
    db.query(query, [response.first_name, response.last_name, response.roleId, response.managerId, response.is_manager]), async(err, res) => {
      if(!err){
        console.table(res);
        console.log(`${response.first_name} ${response.last_name} has successfully been added to the database.`);
      }else{
        return err;
      };
    };
    let confirm = await inquirer.prompt(addEmployeeConfirm);
    if(confirm){
      return createEmployee();
    }else{
      return nav();
    };
  }catch(err){
    console.error(err)
  };
};

const initSwitch = async(response) => {
  switch (response) {
    case 'View All Departments':
        readDepartments();
        break;

    case "View All Roles":
        readRoles();
        break;

    case "View All Employees":
        readEmployees()
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

    case 'Create New Department':
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
        if(confirm){
          console.log("Thank you for using Employee Tracker, Come back again soon!")
          process.exit(1);
        };  
        break;
  };
  return 
};

const nav = async() => {
  try{
    const response = await inquirer.prompt(navigationPrompts); 
    console.log(response);
    if(response.Navigation === 'Return to main menu'){
      init();
    } else {
      const confirm = await inquirer.prompt(confirmPrompt);
      if(confirm){
        console.log("Thank you for using Employee Tracker, Come back again soon!")
        process.exit(1);
      };  
    }
  }catch(err){
    console.error(err)
  }
}

const createOptionsArrays = async() => {
  try{
    rolesArr = await createRolesArray();
    departmentsArr = await createDepartmentsArray();
    employeesArr = await createEmployeeArray();

  }catch(err){
    console.error(err);
  }
}


const init = async() => {
  try{
    createOptionsArrays();
    const response =  await inquirer.prompt(initialPromptOptions);
    initSwitch(response.initial);
  }catch(err){
    console.error(err);
  }
};


init();

