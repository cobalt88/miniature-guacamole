const inquirer = require('inquirer');
const src = require('./src');
const lib = require('./lib');
const utils = require('./utils');


const init = async() => {
  const response =  await inquirer.prompt(lib.initialPromptOptions);
  console.log(response)
  const filter = await utils.initSwitch(response.initial);
};


init();






