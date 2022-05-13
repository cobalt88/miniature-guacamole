const inquirer = require('inquirer');
const lib = require('../../lib');
const utils = require('../../utils');

const cliNav = async() => {
  const response = await inquirer.prompt(lib.inquirerPrompts.navigation); 
  switch(response.Navigation){
    case 'Return to main menu':
      const response =  await inquirer.prompt(lib.inquirerPrompts.initialPromptOptions);
      console.log(response.initial);
      utils.initSwitch(response.initial);
      break;

    case 'Exit Application':
      const confirm = await inquirer.prompt(lib.inquirerPrompts.confirm);
      if(confirm){
        console.log("Thank you for using Employee Tracker, Come back again soon!")
        process.exit(1);
      };     
      break;
  }
}



module.exports = cliNav