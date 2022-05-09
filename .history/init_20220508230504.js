const initPrompt = require('./src/initialPrompt');
const inquirer = require('inquirer');
const fs = require('fs');



const init = async() => {
 await initPrompt();
};

init();


