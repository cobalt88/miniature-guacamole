const initPrompt = require('./src/initialPrompt');
const inquirer = require('inquirer')



const init = async() => {
 await initPrompt();
};

init();
