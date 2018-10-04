<?php

namespace Queries;

use Core\DB\Database;
use Helpers\RequestHelper;

class EmployeesQueries
{
    /**
     * @var Database
     */
    protected $db;
    protected $request_helper;

    /**
     * DepartmentsQueries constructor.
     */
    public function __construct()
    {
        $this->db = new Database();
        $this->request_helper = new RequestHelper();
    }

    /**
     * @return array
     */
    public function getEmployees()
    {
        $sql = 'SELECT * FROM employees';

        return $this->db->query($sql);
    }

    /**
     * Update record
     * @param $data
     * @return array
     */
    public function putEmployee($data)
    {
        $sql = "UPDATE employees SET " . $this->request_helper->convertToQueryString($data) .
            " WHERE id = " . $data['id'];
        $this->db->query($sql);

        $sql_result = 'SELECT * FROM employees WHERE id = ' . $data['id'];

        return $this->db->query($sql_result);
    }

    /**
     * New record
     * @param $data
     * @return array
     */
    public function postEmployee($data)
    {
        $sql = 'INSERT INTO employees SET ' . $this->request_helper->convertToQueryString($data);
        $this->db->query($sql);

        $sql_new = 'SELECT * FROM employees WHERE id = LAST_INSERT_ID()';

        return $this->db->query($sql_new);
    }

    /**
     * Delete record
     * @param $id
     * @return array
     */
    public function deleteEmployee($id)
    {
        $sql = 'DELETE FROM employees WHERE id=' . $id;

        return $this->db->query($sql) ?? $id;
    }
}