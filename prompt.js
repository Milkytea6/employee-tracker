// Separate file to handle inquirer
const inquirer = require('inquirer');
const { getEmployees, getDepartments, getRoles } = require('./getFunctions');
// Variables for all the prompts for inquirer
const menuPrompts = [
  {
    type: "list",
    message: "What would you like to do?",
    name: "menu",
    choices: ["View Employees", "View Departments", "View Roles", "Add Employee",
      "Add Department", "Add Role", "Quit"],
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
      message: "What is the empolyees department id?",
      name: "departmentId",
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
        case "Add Employee":
          addEmployee();
          break;
        case "Add Department":
          addDepartment();
          break;
        case "Add Role":
          addRole();
          break;
        case "Quit":
          console.log("Exit terminal")
        default:
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
            console.log(`${result.dep_name}`));
          startMenu();
  }
  const addRole = async () => {
    await inquirer
          .prompt(addRolePrompts)
          .then((result) => 
          console.log(`${result.title}, ${result.salary}, ${result.department}`));
          startMenu();
  }
  const addEmployee = async () => {
    await inquirer
          .prompt(addEmployeePrompts)
          .then((result) =>
            console.log(`${result.firstName}, ${result.lastName}, ${result.roleId}, ${result.departmentId}`));
          startMenu();
  }
  // Exports functions to other javascript files
    module.exports = {
      menuPrompts,
      addDepartmentPrompts,
      addRolePrompts,
      addEmployeePrompts,
      startMenu,
    };
