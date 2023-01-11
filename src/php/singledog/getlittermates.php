<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
require(__DIR__ . '/../config.php');

if (!isset($_GET['url'])) {
    $error = ["error" => "Missing dogID parameter"];
    header('Content-Type: application/json');
    echo json_encode($error);
    return;
}

$url = $_GET['url'];
$sql = "SELECT * from dog
INNER JOIN images ON dog.dogID = images.dogID
INNER JOIN event ON images.eventID = event.eventID
where litterID =(select litterID from dog where url = '$url') and url != '$url'";

$stmt = $pdo->prepare($sql);
$stmt->bindParam(':url', $url);
$stmt->execute();
$littermates = $stmt->fetchAll(PDO::FETCH_ASSOC);

$data = ['littermates'=>$littermates];
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo json_encode($data);

?>