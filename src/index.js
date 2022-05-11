const createEmployee = require('./create/createEmployee');
const createDepartment = require('./create/createDepartment');
const createRole = require('./create/createRole');

const deleteEmployee = require('./delete/deleteEmployee');
const deleteDepartment = require('./delete/deleteDepartment');
const deleteRole = require('./delete/deleteRole');

const readEmployees = require('./read/readEmployees');
const readDepartments = require('./read/readDepartments');
const readRoles = require('./read/readRoles');

const updateEmployee = require('./update/updateEmployee');
const updateDepartment = require('./update/updateDepartment');
const updateRole = require('./update/updateRole');


module.exports = {
  createEmployee: createEmployee,
  createDepartment: createDepartment,
  createRole: createRole,
  deleteEmployee: deleteEmployee,
  deleteDepartment: deleteDepartment,
  deleteRole: deleteRole,
  readEmployees: readEmployees,
  readDepartments: readDepartments,
  readRoles: readRoles,
  updateEmployee: updateEmployee,
  updateDepartment: updateDepartment,
  updateRole: updateRole
};

