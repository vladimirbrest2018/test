<?php

namespace Core\Service\Router;

use Core\Router\Router;
use Core\Service\AbstractProvider;

class RouteProvider extends AbstractProvider
{

    public $serviceName = 'router';

    /**
     * @return mixed
     */
    function init()
    {
        $router = new Router('http://test');

        $this->container->set($this->serviceName, $router);
    }
}