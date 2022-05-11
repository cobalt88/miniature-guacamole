const deleteEmployee = require('./delete/deleteEmployee');
const deleteDepartment = require('./delete/deleteDepartment');
const deleteRole = require('./delete/deleteRole');

module.exports = {
  deleteEmployee: deleteEmployee,
  deleteDepartment: deleteDepartment,
  deleteRole: deleteRole
}