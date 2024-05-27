const { startMenu, menuPrompts, addDepartmentPrompts, addRolePrompts, addEmployeePrompts,} = require('./prompt.js');
const { getEmployees, getDepartments, getRoles } = require('./getFunctions.js');
const inquirer = require('inquirer');
const { default: Choice } = require('inquirer/lib/objects/choice');

startMenu();
