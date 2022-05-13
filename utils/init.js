const utils = require('../utils');
const inquirer = require('inquirer');
const lib = require('../lib');


const init = async() => {
  const response =  await inquirer.prompt(lib.inquirerPrompts.initialPromptOptions);
  console.log(response.initial);
  utils.initSwitch(response.initial);
};

module.exports = init