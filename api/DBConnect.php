<?php

class DBConnect {
    private $db;

    public function __construct() {
        $this->connect();
        $this->createTable(); // Create the table on instantiation
    }

    private function connect() {
        try {
            $dbPath = __DIR__ . '/mydatabase.db'; // Adjust the path to your database file
            $this->db = new SQLite3($dbPath);
            if (!$this->db) {
                throw new Exception('Failed to connect to the database.');
            }
        } catch (Exception $e) {
            die($e->getMessage());
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
