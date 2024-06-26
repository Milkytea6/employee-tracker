// Separate file to handle inquirer
const inquirer = require('inquirer');
const { getEmployees, getDepartments, getRoles, getEmployeesByDept, getEmployeesByManager, getEmployeesByRole, getAverageSalary, db } = require('./getFunctions');
// Variables for all the prompts for inquirer
const menuPrompts = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "menu",
    choices: ["View Employees", "View Employees by Department", "View Employees by Manager", "View Employees by Role", "View Departments", "View Roles", "View Average Salary", "Add Employee",
      "Add Department", "Add Role", "Update Role", "Update Manager", "Quit"],
  }
]
const addEmployeePrompts = [
  {
    type: "input",
    message: "What is the empolyees first name?",
    name: "firstName",
  },
  {
    type: "input",
    message: "What is the empolyees last name?",
    name: "lastName",
  },
  {
    type: "input",
    message: "What is the empolyees role id?",
    name: "roleId",
  },
  {
    type: "input",
    message: "What is the id of the employee's manager?",
    name: "managerId",
  }
];
const addDepartmentPrompts = [
  {
    type: "input",
    message: "What is the name of the department?",
    name: "dep_name",
  }
];
const addRolePrompts = [
  {
    type: "input",
    message: "What is the title of the role?",
    name: "title",
  },
  {
    type: "input",
    messgae: "what is the salary of the role?",
    name: "salary",
  },
  {
    type: "input",
    message: "what is the department for this role?",
    name: "department",
  }
];
const updateEmployeeRolePrompts = [
  {
    type: "input",
    message: "What is the id of the employee?",
    name: "employeeId",
  },
  {
    type: "input",
    message: "What is the updated role id for the employee?",
    name: "roleId",
  }
]
const updateManagerPrompts = [
  {
    type: "input",
    message: "What is the id of the employee?",
    name: "employeeId",
  },
  {
    type: "input",
    message: "What is the updated manager id for the employee?",
    name: "managerId",
  }
]
// A big swicth case to call different functions depending on the option slected
const startMenu = async () => {
  console.log('\n')
  await inquirer
    .prompt(menuPrompts)
    .then((result) => {
      console.log('\n')
      switch (result.menu) {
        case "View Employees":
          getEmployees();
          startMenu();// Resets the prompts
          break;
        case "View Departments":
          getDepartments();
          startMenu();
          break;
        case "View Roles":
          getRoles();
          startMenu();
          break;
        case "View Employees by Department":
          getEmployeesByDept();
          startMenu();
          break;
        case "View Employees by Manager":
          getEmployeesByManager();
          startMenu();
          break;
        case "View Employees by Role":
          getEmployeesByRole();
          startMenu();
          break;
        case "View Average Salary":
          getAverageSalary();
          startMenu();
          console.log('View Average Salary case ran')
          break;
        case "Add Employee":
          addEmployee();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Update Role":
          updateEmployeeRole();
          break;
        case "Update Manager":
          updateManager();
          break;
        case "Quit":
          console.log("Exit terminal")
          break;
        default:
          console.error('Pick a valid option.')
          startMenu();
          break;
      }
    }
    );
};
//  Functions to add data to the table, Still need to add code functionality
const addDepartment = async () => {
    await inquirer
      .prompt(addDepartmentPrompts)
      .then((result) =>
        db.any(`
      INSERT INTO department (dep_name)
      VALUES ('${result.dep_name}');
      `));
    startMenu();
  }
  const addRole = async () => {
    await inquirer
      .prompt(addRolePrompts)
      .then((result) =>
        db.any(`
      INSERT INTO role (title, salary, department_id)
      VALUES ('${result.title}', ${result.salary}, ${result.department});
      `));
    startMenu();
  }
  const addEmployee = async () => {
    await inquirer
      .prompt(addEmployeePrompts)
      .then((result) =>
        db.any(`
      INSERT INTO employee (first_name, last_name, role_id, manager_id)
      VALUES ('${result.firstName}', '${result.lastName}', ${result.roleId}, ${result.managerId});
      `));
    startMenu();
  }
  // Function to find an employee by id and update the role_id
  const updateEmployeeRole = async () => {
    await inquirer
      .prompt(updateEmployeeRolePrompts)
      .then((result) =>
      db.any(`
      UPDATE employee 
      SET role_id = ${result.roleId} 
      WHERE employee.id = ${result.employeeId}
      `));
    startMenu();
  }
  const updateManager = async () => {
    await inquirer
      .prompt(updateManagerPrompts)
      .then((result) =>
      db.any(`
      UPDATE employee 
      SET manager_id = ${result.managerId} 
      WHERE employee.id = ${result.employeeId}
      `));
    startMenu();
  }

// Exports functions to other javascript files
module.exports = {
  startMenu
};