<?php

namespace Helpers;

class RequestHelper
{

    /**
     * Get data from request to Array
     * @return array
     */
    public function getDataFromBodyRequest()
    {
        $put_fp = fopen('php://input', 'r');
        $put_data = '';

        while ($data = fread($put_fp, 4096))
            $put_data .= $data;
        fclose($put_fp);

        return json_decode($put_data, true);
    }


    /**
     * @param $data
     * @return string
     */
    public function convertToQueryString($data)
    {
        $string = '';

        foreach ($data as $key => $element) {

            if (!empty($element)) {
                $end = end($data) === $element ? '"' : '", ';

                $string .= $key . ' = "' . $element . $end;
            }

        }
        return $string;
    }
}