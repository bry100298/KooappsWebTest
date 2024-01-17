<?php

require_once('DBConnect.php');

header('Content-Type: application/json');

$dbConnect = new DBConnect();
$db = $dbConnect->getDB();

$requestMethod = $_SERVER['REQUEST_METHOD'];

switch ($requestMethod) {
    case 'GET':
        $result = $db->query('SELECT * FROM mytable');
        $rows = [];
        while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
            $rows[] = $row;
        }
        echo json_encode($rows);
        break;

    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $stmt = $db->prepare('INSERT INTO mytable (a, b, c) VALUES (:a, :b, :c)');
        $stmt->bindValue(':a', $data['a'], SQLITE3_INTEGER);
        $stmt->bindValue(':b', $data['b'], SQLITE3_INTEGER);
        $stmt->bindValue(':c', $data['c'], SQLITE3_TEXT);
        $stmt->execute();
        echo json_encode(['message' => 'Record added successfully']);
        break;

    case 'PUT':
        // Add logic for handling PUT requests
        break;

    case 'DELETE':
        // Add logic for handling DELETE requests
        break;

    default:
        http_response_code(405); // Method Not Allowed
        echo json_encode(['message' => 'Method Not Allowed']);
        break;
}

?>
