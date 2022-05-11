const inquirer = require('inquirer');
const inquirerPrompts = require('./lib/inquirerPrompts');
const initSwitch = require('./utils/initSwitch');


const init = async() => {
  const response =  await inquirer.prompt(inquirerPrompts.initialPromptOptions);
  initSwitch(response.initial);
};

init();


