<?php

require_once __DIR__ . '/../vendor/autoload.php';

use Core\Container\Container;
use Core\Kernel;

try {

    $container = new Container();

    $services = require __DIR__ . '/Config/Service.php';

    foreach ($services as $service) {

        $provider = new $service($container);
        $provider->init();
    }

    $kernel = new Kernel($container);
    $kernel->run();

} catch (\ErrorException $e) {

    echo $e->getMessage();

}