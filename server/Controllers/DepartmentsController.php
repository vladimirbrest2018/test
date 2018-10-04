<?php

namespace Controllers;

use Helpers\RequestHelper;
use Helpers\ValidateHelper;
use Queries\DepartmentsQueries;

class DepartmentsController
{
    /**
     * @var DepartmentsQueries
     */
    private $department_query;
    /**
     * @var RequestHelper
     */
    private $request_helper;
    private $validator;

    /**
     * DepartmentsController constructor.
     */
    public function __construct()
    {
        $this->department_query = new DepartmentsQueries();
        $this->request_helper = new RequestHelper();
        $this->validator = new ValidateHelper();
    }

    /**
     * All records
     */
    public function getAll()
    {
        echo json_encode(
            $this->department_query->getDepartments()
        );
    }

    /**
     * Update record
     * @param $id
     */
    public function put($id)
    {
        $put_data = $this->request_helper->getDataFromBodyRequest();

        if (empty($valid_data)) {
            echo json_encode(
                [
                    $this->department_query->putDepartment($put_data),
                    'error' => false
                ]
            );
        } else {
            echo json_encode(
                [
                    array_keys($valid_data),
                    'error' => true
                ]
            );
        }
    }

    /**
     *  New record
     */
    public function post()
    {
        $data = $this->request_helper->getDataFromBodyRequest();

        list($put_data, $valid_data) = $this->validator->validateDepartments($data);

        if (empty($valid_data)) {
            echo json_encode(
                [
                    $this->department_query->postDepartments($put_data),
                    'error' => false
                ]
            );
        } else {
            echo json_encode(
                [
                    array_keys($valid_data),
                    'error' => true
                ]
            );
        }
    }

    /**
     * Delete record
     * @param $id
     */
    public function delete($id)
    {
        echo $this->department_query->deleteDepartments($id);
    }
}