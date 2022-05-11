const inquirer = require('inquirer');
const src = require('./src');
const lib = require('./lib');
const initSwitch = require('./utils/initSwitch');


const init = async() => {
  const response =  await inquirer.prompt(lib.initialPromptOptions);
  console.log(response.initial);
  initSwitch(response.initial);
};


init();


