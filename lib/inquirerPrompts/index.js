const initialPromptOptions = require('./initialPrompt');
const createPrompts = require('./createPrompts');
const deletePrompts = require('./deletePrompts');
const readPrompts = require('./readPrompts');
const updatePrompts = require('./updatePrompts');
const navigation = require('./navigationPrompts');
const confirm = require('./confirm');

module.exports = {
  initialPromptOptions: initialPromptOptions,
  createPrompts: createPrompts,
  deletePrompts: deletePrompts,
  readPrompts: readPrompts,
  updatePrompts: updatePrompts,
  navigation: navigation,
  confirm: confirm
};