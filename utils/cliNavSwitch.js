const inquirer = require('inquirer');
const inquirerPrompts = require('../lib/inquirerPrompts');
const src = require('../src');
const exit = require('./exit');
const init = require('../app');


const cliNavSwitch = async(response) => {
  switch(response){
    case 'Return to main menu':
      init();
      break;

    case 'Exit Application':
      const confirm = await inquirer.prompt(inquirerPrompts.confirm);
      if(confirm){
        exit(); 
      };     
      break;
  }
}

module.exports = cliNavSwitch