const { startMenu } = require('./prompt.js');

try {
  startMenu();
} catch (error) {
  console.error(error);
}
