<?php

namespace Core;

use Core\Helpers\Common;
use Core\Router\DispatchedRoute;

class Kernel
{

    /**
     * @var /Core/Container/Container
     */
    private $container;

    public $router;

    /**
     * Kernel constructor.
     * @param $container
     */
    public function __construct($container)
    {
        $this->container = $container;
        $this->router = $this->container->get('router');
    }

    public function run()
    {
        try {

            require_once './Routes/routes.php';

            $routerDispatch = $this->router->dispatch(
                Common::getMethod(),
                Common::getPathUrl()
            );

            if ($routerDispatch == null) {
                $routerDispatch = new DispatchedRoute('ErrorController:page404');
            }

            list($class, $action) = explode(':', $routerDispatch->getController(), 2);

            $controller = '\\Controllers\\' . $class;

            call_user_func_array(
                [new $controller($this->container), $action],
                $routerDispatch->getParameters()
            );

        } catch (\Exception $e) {
            echo $e->getMessage();
        }

    }

}