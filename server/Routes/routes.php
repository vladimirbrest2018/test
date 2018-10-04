<?php

/**
 * ...->add( name, uri (parameter), controller : method, request_method )
 * name str
 * uri str
 * parameter int Integer parameter
 * controller str Controller's name
 * method str Controller's method
 * request_method str Uppercase request method name
 */
$this->router->add('departments', '/departments', 'DepartmentsController:getAll');
$this->router->add('departments_put', '/departments/(id:int)', 'DepartmentsController:put', 'PUT');
$this->router->add('departments_post', '/departments', 'DepartmentsController:post', 'POST');
$this->router->add('departments_delete', '/departments/(id:int)', 'DepartmentsController:delete', 'DELETE');

$this->router->add('employees', '/employees', 'EmployeesController:getAll');
$this->router->add('employees_put', '/employees/(id:int)', 'EmployeesController:put', 'PUT');
$this->router->add('employees_post', '/employees', 'EmployeesController:post', 'POST');
$this->router->add('employees_delete', '/employees/(id:int)', 'EmployeesController:delete', 'DELETE');