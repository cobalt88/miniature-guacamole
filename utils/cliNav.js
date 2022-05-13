const inquirer = require('inquirer');
const lib = require('../lib');
const utils = require('../utils');

const cliNav = async() => {
  const response = await inquirer.prompt(lib.inquirerPrompts.navigation); 
  console.log(response)

  switch(response.Navigation){
    case 'Return to main menu':
      utils.init();
      break;

    case 'Exit Application':
      const confirm = await inquirer.prompt(lib.inquirerPrompts.confirm);
      if(confirm){
        utils.exit(); 
      };     
      break;
  }
}

module.exports = cliNav