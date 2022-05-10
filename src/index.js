const createEmployee = require('./create/createEmployee');
const createDepartment = require('./create/createDepartment');
const createRole = require('./create/createRole');

const deleteEmployee = require('./delete/deleteEmployee');
const deleteDepartment = require('./delete/deleteDepartment');
const deleteRole = require('./delete/deleteRole');

module.exports = {
  createEmployee: createEmployee,
  createDepartment: createDepartment,
  createRole: createRole,
  deleteEmployee: deleteEmployee,
  deleteDepartment: deleteDepartment,
  deleteRole: deleteRole
};