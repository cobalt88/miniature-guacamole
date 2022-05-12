const inquirer = require('inquirer');
const inquirerPrompts = require('../lib/inquirerPrompts');
const exit = require('./exit');
const init = require('../init');

const cliNav = async() => {
  const response = await inquirer.prompt(inquirerPrompts.navigation); 
  if(response.navigation === 'Main Menu'){
    init()
  } else {
    const confirm = await inquirer.prompt(inquirerPrompts.confirm);
    if(confirm){
      exit();
    }
  }
}

module.exports = cliNav