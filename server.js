const { response } = require('express');
const inquirer = require('inquirer');
const { default: Choice } = require('inquirer/lib/objects/choice');
const pgp = require('pg-promise')({
  // Initialization Options
});
// Preparing the connection details:
const cn = 'postgres://postgres:password1@localhost:5432/employees_db';
// Creating a new database instance from the connection details:
const db = pgp(cn);

// Function to get employees from db
const getEmployees = async () => {
  // Selects only id, first name, last name, title, and salary. Joins the values of title and salary with employee from role.
  const data = await db.any("SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary FROM employee JOIN role ON employee.role_id = role.id");
  console.table(data);
}
// Function to get departments from db.
const getDepartments = async () => {
  // Selects everything from department.
  const data = await db.any("SELECT * FROM department");
  console.table(data);
}
// Function to get roles from db.
const getRoles = async () => {
  // Selects only id, title, salary, and dep_name. Joins values of dep_name with role from department.
  const data = await db.any("SELECT role.id, role.title, role.salary, department.dep_name FROM role JOIN department ON role.department_id = department.id");
  console.table(data);
}

const addEmployeeQuestions = [
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
    message: "What is the empolyees department id?",
    name: "departmentId",
  }
]
const viewTables = [
  {
    type: "list",
    message: "What would you like to view?",
    name: "tableView",
    choices: ["View employees", "View departments", "View roles"],
}
]
inquirer
  .prompt(viewTables)
  .then((response) => {
switch (response.viewTable) {
  case "View employees":
    getEmployees();
    break;
  case "View departments":
    getDepartments();
    break;
  case "View roles":
    getRoles();
    break;

  default:
    break;
}    
  }
  )
  

inquirer
  .prompt(addEmployeeQuestions)
  .then((response) =>
    console.log(`${response.firstName}, ${response.lastName}, ${response.roleId}, ${response.departmentId}`)
  );
