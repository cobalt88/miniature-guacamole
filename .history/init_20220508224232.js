const initPrompt = require('./src/initialPrompt');
const inquirer = require('inquirer');
const { fstat } = require('fs');



const init = async() => {
 await initPrompt();
};

init();


