
-- Delete existing and create new
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS roles;
DROP TABLE IF EXISTS departments;

-- Schema for department table
CREATE TABLE departments (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
dep_name VARCHAR(60)
);

--  Schema for role table
CREATE TABLE roles (
id INTEGER AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(60),
salary DECIMAL(10,2),
department_id INTEGER,
CONSTRAINT fk_department FOREIGN KEY (department_id) REFERENCES departments(id) ON DELETE CASCADE
);

-- Schema for emplyee table
CREATE TABLE employees (
    id INTEGER AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(60),
    last_name VARCHAR(60),
    manager_id INTEGER,  
    CONSTRAINT fk_manager FOREIGN KEY (manager_id) REFERENCES employees(id) ON DELETE SET NULL,
    role_id INTEGER,
    is_manager BOOLEAN NOT NULL, -- True if the employee is also a manager
    CONSTRAINT fk_role FOREIGN KEY (role_id) REFERENCES roles(id) ON DELETE CASCADE
);