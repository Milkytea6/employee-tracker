DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

\c employee_db;

-- Table for department
CREATE TABLE department(
    id INTEGER NOT NULL,
    dep_name VARCHAR(30),
)
CREATE TABLE role(
    id INTEGER NOT NULL,
    title VARCHAR(30),
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
)
CREATE TABLE employees (
    id INTEGER NOT NULL,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER NOT NULL,
    FOREIGN KEY (role_id, manager_id)
    REFERENCES role(id), employees(id)
    ON DELETE SET NULL 
)