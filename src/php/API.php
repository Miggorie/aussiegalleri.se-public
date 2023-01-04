<?php
require('../config.php');
$sql = "SELECT * FROM dog
INNER JOIN images ON dog.dogID = images.dogID
INNER JOIN event ON images.eventID = event.eventID
ORDER BY name ASC";

$stmt = $pdo->prepare($sql);
$stmt->execute();

$dogs = $stmt->fetchAll();
$data = ['dogs'=>$dogs];
header('Content-Type: application/json');
echo json_encode($data);
?>