const { startMenu, menuPrompts, addDepartmentPrompts, addRolePrompts, addEmployeePrompts,} = require('./prompt.js');
const { getEmployees, getDepartments, getRoles } = require('./getFunctions.js');
const inquirer = require('inquirer');
const { default: Choice } = require('inquirer/lib/objects/choice');


try {
  startMenu();
} catch (error) {
  console.error(error);
}
