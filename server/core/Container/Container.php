<?php

namespace Core\Container;

class Container
{

    /**
     * @var array
     */
    private $container = [];

    /**
     * @param $key
     * @param $value
     * @return mixed
     */
    public function set($key, $value)
    {
        $this->container[$key] = $value;
        return $this;
    }

    /**
     * @param $key
     * @return bool
     */
    public function get($key)
    {
        if ($this->has($key)) {
            return $this->container[$key];
        } else {
            return $this->has($key);
        }
    }

    /**
     * @param $key
     * @return bool
     */
    public function has($key)
    {
        return isset($this->container[$key]);
    }
}