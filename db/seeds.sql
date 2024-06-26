--  Using ACID to wrap all inserts into one action 
DO $$
    DECLARE

    BEGIN

-- Data for the department. (id is included with PRIMARY KEY in schema.sql)
INSERT INTO department (dep_name)
VALUES 
('management'),
('bullpen'),
('field');
-- Data for the role. (id is included with PRIMARY KEY in schema.sql)
INSERT INTO role (title, salary, department_id)
VALUES 
('manager', 100000, 1),
('pitcher', 40000000, 2),
('catcher', 23000000, 3),
('infield', 25000000, 3),
('outfield', 20000000, 3);
-- Data for the employees. (id is included with PRIMARY KEY in schema.sql)
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
('Rob', 'Thompson', 1, 1),
('Caleb', 'Cotham', 1, 1),
('Kyle', 'Schwarber', 5, 1),
('J.T.', 'Realmuto', 3, 1),
('Bryce', 'Harper', 4, 1),
('Alec', 'Bohm', 4, 1),
('Nick', 'Castellanos', 5, 1),
('Bryson', 'Stott', 4, 1),
('Edmundo', 'Sosa', 4, 1),
('Brandon', 'Marsh', 5, 1),
('Johan', 'Rojas', 5, 1),
('Aaron', 'Nola', 2, 2),
('Zach', 'Wheeler', 2, 2);

RAISE NOTICE 'Department, role, and employee values added to tables';

EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE 'An error occurred: %', SQLERRM; -- Log the error
        ROLLBACK; -- Explicitly roll back changes in case of error
END $$;


