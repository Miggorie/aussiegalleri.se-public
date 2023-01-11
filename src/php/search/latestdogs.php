<?php
require(__DIR__ . '/../config.php');
$sql = "SELECT dog.url, dog.dogID, dog.name, images.standLeft, event.date 
    FROM dog
    INNER JOIN images ON dog.dogID = images.dogID
    INNER JOIN event ON images.eventID = event.eventID
    ORDER BY dogID DESC
    LIMIT 4";

$stmt = $pdo->prepare($sql);
$stmt->execute();

$dogs = $stmt->fetchAll();
$data = ['dogs'=>$dogs];
header('Content-Type: application/json');
header('Access-Control-Allow-Origin:*');
echo json_encode($data);
?>