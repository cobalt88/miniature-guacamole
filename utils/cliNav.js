const inquirer = require('inquirer');
const inquirerPrompts = require('../lib/inquirerPrompts');
const init = require('../init');

const cliNav = async() => {
  const response = await inquirer.prompt(inquirerPrompts.navigation); 
  if(response === 'Main Menu'){
    init();
  } else {
    const confirm = await inquirer.prompt(inquirerPrompts.confirm);
    if(confirm){
      exit()
    }
  }
}

