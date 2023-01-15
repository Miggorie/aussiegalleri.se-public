<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
require(__DIR__ . '/../config.php');

// SQL Query
$sql = "SELECT 
    COUNT(*) as total_dogs,
    COUNT(CASE WHEN isBitch = 0 THEN 1 END) as total_females,
    COUNT(CASE WHEN isBitch = 1 THEN 1 END) as total_males,
    COUNT(CASE WHEN isPuppy = 1 THEN 1 END) as total_adults,
    COUNT(CASE WHEN isPuppy = 0 THEN 1 END) as total_pups
FROM dog
INNER JOIN images ON dog.dogID = images.dogID";

// Execute query
$stmt = $pdo->prepare($sql);
$stmt->execute();
$dogcount = $stmt->fetchAll(PDO::FETCH_ASSOC);

// Return as JSON
header('Content-Type: application/json');
header('Access-Control-Allow-Origin:*');
echo json_encode($dogcount);


// $dogcount = $stmt->fetchAll();
// $data = ['dogcount'=>$dogcount];
// header('Content-Type: application/json');
// header('Access-Control-Allow-Origin:*');
// echo json_encode($data);
?> 