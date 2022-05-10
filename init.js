// const initPrompt = require('./lib/inquirerPrompts/initialPrompt');
const inquirer = require('inquirer');
// const fs = require('fs');
const src = require('./src');
const lib = require('./lib');
const utils = require('./utils');


const init = async() => {
  const response =  await inquirer.prompt(lib.initialPromptOptions);
  console.log(response)
  const filter = await utils.initSwitch(response.initial);
};

// const init = async() => {
//   const result = await modules.createDepartment();
//   console.log(result);
// }

init();






