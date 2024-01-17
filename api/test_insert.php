<?php

require_once(__DIR__ . '/DBConnect.php'); // Use __DIR__ to get the current script's directory

$dbConnect = new DBConnect();
$db = $dbConnect->getDB();

$data = [
    'a' => 42,
    'b' => 17,
    'c' => 'Hello, World!',
];

$stmt = $db->prepare('INSERT INTO mytable (a, b, c) VALUES (:a, :b, :c)');
$stmt->bindValue(':a', $data['a'], SQLITE3_INTEGER);
$stmt->bindValue(':b', $data['b'], SQLITE3_INTEGER);
$stmt->bindValue(':c', $data['c'], SQLITE3_TEXT);
$stmt->execute();

echo 'Data inserted successfully.';

?>
