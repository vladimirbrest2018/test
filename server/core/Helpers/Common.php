<?php

namespace Core\Helpers;

class Common
{
    /**
     * @return bool
     */
    function isPost()
    {
        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            return true;
        } else {
            return false;
        }
    }

    /**
     * @return mixed
     */
    function getMethod()
    {
        return $_SERVER['REQUEST_METHOD'];
    }

    function getPathUrl()
    {
        $pathUrl = $_SERVER['REQUEST_URI'];
        if ($position = strpos($pathUrl, '?')) {

            $pathUrl = substr($pathUrl, 0, $position);

        }
        return $pathUrl;
    }
}