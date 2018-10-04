<?php

namespace Helpers;

class ValidateHelper
{

    /**
     * @param $put_data
     * @return array
     */
    public function validateDepartments($put_data)
    {
        $args = [
            'description' => [
                'filter' => FILTER_VALIDATE_REGEXP,
                'options' => ['regexp' => "/.*/"]
            ],
            'name' => [
                'filter' => FILTER_VALIDATE_REGEXP,
                'options' => ['regexp' => "/.{3,}/"]
            ]
        ];

        $valid_data = filter_var_array($put_data, $args);

        return [
            $valid_data,
            array_diff_assoc($put_data, $valid_data)
        ];
    }
}