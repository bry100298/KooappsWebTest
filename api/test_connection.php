<?php

require_once(__DIR__ . '/DBConnect.php'); // Use __DIR__ to get the current script's directory

$dbConnect = new DBConnect();
$db = $dbConnect->getDB();

if ($db) {
    echo 'Connected to the database.';
} else {
    echo 'Failed to connect to the database.';
}

?>
