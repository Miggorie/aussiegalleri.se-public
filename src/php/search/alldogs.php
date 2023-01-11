<?php
require(__DIR__ . '/../config.php');
$sql = "SELECT dog.*, images.*, event.*, 
    CASE isBitch 
        WHEN 1 THEN 'Hane'
        WHEN 0 THEN 'Tik'
        ELSE NULL END AS gender
    FROM dog
    INNER JOIN images ON dog.dogID = images.dogID
    INNER JOIN event ON images.eventID = event.eventID
    ORDER BY name ASC";

$stmt = $pdo->prepare($sql);
$stmt->execute();

$dogs = $stmt->fetchAll();
$data = ['dogs'=>$dogs];
header('Content-Type: application/json');
header('Access-Control-Allow-Origin:*');
echo json_encode($data);
?>