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
    choices: roles
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

module.exports = {
  createEmployeePrompts
}