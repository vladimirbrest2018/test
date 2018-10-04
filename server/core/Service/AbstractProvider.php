<?php

namespace Core\Service;

abstract class AbstractProvider
{
    /**
     * @var \Core\Container\Container
     */
    protected $container;

    /**
     * AbstractProvider constructor.
     * @param \Core\Container\Container $container
     */
    public function __construct(\Core\Container\Container $container)
    {
        $this->container = $container;
    }

    /**
     * @return mixed
     */
    abstract function init();

}