<?php

namespace Controllers;

class ErrorController /* MainController*/
{
    /**
     * 404 Not Found
     */
    public function page404()
    {
        header("HTTP/1.0 404 Not Found");
        echo 'Error 404. Handler Not Found';
    }
}