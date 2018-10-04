<?php

namespace Core\DB;

use PDO;

class Database
{

    const DB_TYPE = 'mysql';
    const DB_HOST = 'localhost';
    const DB_NAME = 'test';
    const DB_CHARSET = 'utf8';
    const DB_USER = 'root';
    const DB_PASSWORD = '';

    private $link;

    /**
     * Database constructor.
     */
    public function __construct()
    {
        $this->connect();
    }

    /**
     * @return $this
     */
    private function connect()
    {
        $dns = self::DB_TYPE .
            ":host=" . self::DB_HOST .
            ";dbname=" . self::DB_NAME .
            ";charset=" . self::DB_CHARSET;

        $this->link = new PDO($dns, self::DB_USER, self::DB_PASSWORD);

        return $this;
    }

    /**
     * @param $sql
     * @return mixed
     */
    public function execute($sql)
    {
        $stmt = $this->link->prepare($sql);

        return $stmt->execute();
    }

    /**
     * @param $sql
     * @return array
     */
    public function query($sql)
    {
        $stmt = $this->link->prepare($sql);

        $stmt->execute();

        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

        if ($result === false) {
            return [];
        }

        return $result;
    }
}

