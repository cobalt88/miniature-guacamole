const initialPromptOptions = require('./inquirerPrompts/initialPrompt');
const createPrompts = require('./inquirerPrompts/createPrompts');
const deletePrompts = require('./inquirerPrompts/deletePrompts');
const readPrompts = require('./inquirerPrompts/readPrompts');
const updatePrompts = require('./inquirerPrompts/updatePrompts');

module.exports = {
  initialPromptOptions: initialPromptOptions,
  createPrompts: createPrompts,
  deletePrompts: deletePrompts,
  readPrompts: readPrompts,
  updatePrompts: updatePrompts
};