<?php

namespace Queries;

use Core\DB\Database;

class DepartmentsQueries
{
    /**
     * @var Database
     */
    protected $db;

    /**
     * DepartmentsQueries constructor.
     */
    public function __construct()
    {
        $this->db = new Database();
    }

    /**
     * @return array
     */
    public function getDepartments()
    {
        $sql = 'SELECT * FROM departments';

        return $this->db->query($sql);
    }

    /**
     * Update record
     * @param $data
     * @return array
     */
    public function putDepartment($data)
    {
        $sql = "UPDATE departments SET name = '" . $data['name'] . "', description = '" . $data['description'] .
            "' WHERE id = " . $data['id'];
        $this->db->query($sql);

        $sql_result = 'SELECT * FROM departments WHERE id = ' . $data['id'];

        return $this->db->query($sql_result);
    }

    /**
     * New record
     * @param $data
     * @return array
     */
    public function postDepartments($data)
    {
        $sql = 'INSERT INTO departments (name, description) VALUES ("' . $data['name'] . '", "' . $data['description'] . '")';
        $this->db->query($sql);

        $sql_new = 'SELECT * FROM departments WHERE id = LAST_INSERT_ID()';

        return $this->db->query($sql_new);
    }

    /**
     * Delete record
     * @param $id
     * @return array
     */
    public function deleteDepartments($id)
    {
        $sql = 'DELETE FROM departments WHERE id=' . $id;

        return $this->db->query($sql) ?? $id;
    }
}