const { response } = require('express');
const inquirer = require('inquirer');

const viewTables = [
    {
      type: "list",
      message: "What would you like to view?",
      name: "tableView",
      choices: ["View employees", "View departments", "View roles"],
    }
  ]
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
  ];
  const addDepartmentQuestions = [
    {
      type: "input",
      message: "What is the name of the department?",
      name: "dep_name",
    }
  ];
  const addRoleQuestions = [
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
    );
  inquirer
    .prompt(addEmployeeQuestions)
    .then((response) =>
      console.log(`${response.firstName}, ${response.lastName}, ${response.roleId}, ${response.departmentId}`)
    );
  
  inquirer
    .prompt(addDepartmentQuestions)
    .then((response) =>
      console.log(`${response.dep_name}`));
inquirer
    .prompt(addRoleQuestions)
    .then((response) => 
    console.log(`${response.title}, ${response.salary}, ${response.department}`));
  
  