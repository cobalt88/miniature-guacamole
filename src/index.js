const create = require('./create');
const deleteStuff = require('./delete');
const read = require('./read');
const update = require('./update')

module.exports = {
  create: create,
  deleteStuff: deleteStuff,
  read: read,
  update: update
};

