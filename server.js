const { startMenu } = require('./prompt.js');

const inquirer = require('inquirer');


try {
  startMenu();
} catch (error) {
  console.error(error);
}
