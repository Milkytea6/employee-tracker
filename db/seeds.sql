INSERT INTO department (id, dep_name)
VALUES 
(1, 'dep1'),
(2, 'dep2'),
(3, 'dep3');

INSERT INTO role (id, title, salary, department_id)
VALUES 
(1, 'role1', 50000, 1)

INSERT INTO employees (id, first_name, last_name, role_id, manager_id)
VALUES 
(1, "Chrisropher", "Giordano", 1, 1)

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employees;