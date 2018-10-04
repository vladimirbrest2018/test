<?php

namespace Controllers;

use Helpers\RequestHelper;
use Queries\EmployeesQueries;

class EmployeesController
{
    /**
     * @var EmployeesQueries
     */
    private $employees_query;
    /**
     * @var RequestHelper
     */
    private $request_helper;

    /**
     * DepartmentsController constructor.
     */
    public function __construct()
    {
        $this->employees_query = new EmployeesQueries();
        $this->request_helper = new RequestHelper();
    }

    /**
     * All records
     */
    public function getAll()
    {
        echo json_encode(
            $this->employees_query->getEmployees()
        );
    }

    /**
     * Update record
     * @param $id
     */
    public function put($id)
    {
        $put_data = $this->request_helper->getDataFromBodyRequest();

        echo json_encode(
            $this->employees_query->putEmployee($put_data)
        );
    }

    /**
     *  New record
     */
    public function post()
    {
        $put_data = $this->request_helper->getDataFromBodyRequest();

        echo json_encode(
            $this->employees_query->postEmployee($put_data)
        );

    }

    /**
     * Delete record
     * @param $id
     */
    public function delete($id)
    {
        echo $this->employees_query->deleteEmployee($id);
    }
}