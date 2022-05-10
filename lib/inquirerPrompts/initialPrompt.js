const initialPromptOptions =

  [
    {
      type: 'list',
      //  named used for initialPrompt function 
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
      // parameter for initialPrompt function is named above in the inquirer.prompt function
    }
  ];

module.exports = initialPromptOptions