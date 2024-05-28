// Separate file for getting data from the db
const pgp = require('pg-promise')({
    // Initialization Options
});
// Preparing the connection details:
const cn = 'postgres://postgres:password1@localhost:5432/employees_db';
// Creating a new database instance from the connection details:
const db = pgp(cn);

 // Added new lines so the tables aren't covered by inquirer prompt
function displayData(data) {
    console.log('\n');
    console.table(data);
    console.log('\n');
    console.log('\n');
    console.log('\n');
    console.log('\n');
}
// Function to get employees from db
const getEmployees = async () => {
    // Selects only id, first name, last name, title, and salary, and manager. Joins the values of title and salary with employee from role.
    const data = await db.any(`
    SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.dep_name, manager.first_name AS manager_fn, manager.last_name AS manager_ln
    FROM employee 
    JOIN role ON employee.role_id = role.id 
    JOIN department ON role.department_id = department.id 
    JOIN employee AS manager ON employee.manager_id = manager.id
    `);
    displayData(data);
};
// Function to get departments from db.
const getDepartments = async () => {
    // Selects everything from department.
    const data = await db.any(`
    SELECT * 
    FROM department
    `);
    displayData(data);
};
// Function to get roles from db.
const getRoles = async () => {
    // Selects only id, title, salary, and dep_name. Joins values of dep_name with role from department.
    const data = await db.any(`
    SELECT role.id, role.title, role.salary, department.dep_name 
    FROM role 
    JOIN department 
    ON role.department_id = department.id
    `);
    displayData(data);
};
const getEmployeesByDept = async () => {
    // Selects only id, first name, last name, title, and salary, and manager. Joins the values of title and salary with employee from role.
    const data = await db.any(`
    SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.dep_name, manager.first_name AS manager_fn, manager.last_name AS manager_ln
    FROM employee 
    JOIN role ON employee.role_id = role.id 
    JOIN department ON role.department_id = department.id 
    JOIN employee AS manager ON employee.manager_id = manager.id
    ORDER BY role.department_id
    `);
    displayData(data);
};
const getEmployeesByManager = async () => {
    // Selects only id, first name, last name, title, and salary, and manager. Joins the values of title and salary with employee from role.
    const data = await db.any(`
    SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.dep_name, manager.first_name AS manager_fn, manager.last_name AS manager_ln
    FROM employee 
    JOIN role ON employee.role_id = role.id 
    JOIN department ON role.department_id = department.id 
    JOIN employee AS manager ON employee.manager_id = manager.id
    ORDER BY employee.manager_id
    `);
    displayData(data);
};
const getEmployeesByRole = async () => {
    // Selects only id, first name, last name, title, and salary, and manager. Joins the values of title and salary with employee from role.
    const data = await db.any(`
    SELECT employee.id, employee.first_name, employee.last_name, role.title, role.salary, department.dep_name, manager.first_name AS manager_fn, manager.last_name AS manager_ln
    FROM employee 
    JOIN role ON employee.role_id = role.id 
    JOIN department ON role.department_id = department.id 
    JOIN employee AS manager ON employee.manager_id = manager.id
    ORDER BY employee.role_id
    `);
    displayData(data);
};
const getAverageSalary = async () => {
    // Selects everything from department.
    const data = await db.any(`
    SELECT AVG(salary) AS average_salary
    FROM employee
    JOIN role ON employee.role_id = role.id
    `);
    displayData(data);
};


module.exports = {
    getEmployees, getDepartments, getRoles, getEmployeesByDept, getEmployeesByManager, getEmployeesByRole, getAverageSalary, pgp, cn, db
}