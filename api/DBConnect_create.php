<?php

class DBConnect {
    private $db;

    public function __construct() {
        $this->connect();
        $this->createTable(); // Create the table on instantiation
    }

    private function connect() {
        try {
            $databaseFilePath = __DIR__ . DIRECTORY_SEPARATOR . 'mydatabase.db';

            // Create the database file if it doesn't exist
            if (!file_exists($databaseFilePath)) {
                $this->db = new SQLite3($databaseFilePath);
                $this->createTable(); // Create the table if the file is new
                echo 'Database file created in the api folder.';
            } else {
                $this->db = new SQLite3($databaseFilePath);
                echo 'Connected to the database.';
            }

            if (!$this->db) {
                throw new Exception('Failed to connect to the database.');
            }
        } catch (Exception $e) {
            die('Error: ' . $e->getMessage());
        }
    }

    public function getDB() {
        return $this->db;
    }

    private function createTable() {
        $query = 'CREATE TABLE IF NOT EXISTS mytable (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            a INTEGER,
            b INTEGER,
            c TEXT
        )';

        $this->db->exec($query);
    }
}

?>
