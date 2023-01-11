<?php
require(__DIR__ . '/../config.php');
$url = $_GET['url'];
$sql = "SELECT * FROM litter
where litterID =(select litterID from dog where url = '$url')";


$stmt = $pdo->prepare($sql);
$stmt->execute();

$litter = $stmt->fetchAll();
$data = ['litter'=>$litter];
header('Content-Type: application/json');
header('Access-Control-Allow-Origin:*');
echo json_encode($data);
?>