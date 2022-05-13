const confirm = 
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

module.exports = {
  confirm,
  addEmployeeConfirm
}