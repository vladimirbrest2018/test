<?php

use Helpers\RequestHelper;

class RequestHelperTest extends PHPUnit\Framework\TestCase
{

    /**
     * @group manual
     * @dataProvider provider_convert_to_string
     */
    public function testConvertToQueryString($data, $pending_result)
    {
        $helper = new RequestHelper();
        $result = $helper->convertToQueryString($data);

        $this->assertEquals($pending_result, $result);
    }


    public function provider_convert_to_string()
    {
        return [
            'one' => [
                [
                    'name' => 'Vasa',
                    'surname' => 'Portler',
                    'pay' => '10000',
                    'description' => 'No Description',
                    'department_id' => 5
                ],
                'name = "Vasa", surname = "Portler", pay = "10000", description = "No Description", department_id = "5"'
            ],
            'two' => [
                [
                    'name' => 'Vasa',
                    'surname' => 'Portler',
                    'pay' => '',
                    'description' => '',
                    'department_id' => 5
                ],
                'name = "Vasa", surname = "Portler", department_id = "5"'
            ]
        ];
    }
}