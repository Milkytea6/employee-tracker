DROP DATABASE IF EXISTS employees_db;
DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employees_db;

\c employees_db;

-- Table for department
CREATE TABLE department(
    id SERIAL PRIMARY KEY,
    dep_name VARCHAR(30)
);
-- Table for role with deparnt id from department table
CREATE TABLE role(
    id SERIAL PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL NOT NULL,
    department_id INTEGER,
    FOREIGN KEY (department_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);
-- Table for employee with role from role table and manager from employee table
CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER,
    manager_id INTEGER NOT NULL,
    FOREIGN KEY (manager_id)
    REFERENCES employee(id)
    ON DELETE SET NULL,
    FOREIGN KEY (role_id)
    REFERENCES role(id)
    ON DELETE SET NULL
);