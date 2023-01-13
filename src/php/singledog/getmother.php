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
where name =
  (select dam from dog INNER JOIN litter ON dog.litterID = litter.litterID where url='$url')";

$stmt = $pdo->prepare($sql);
$stmt->bindParam(':url', $url);
$stmt->execute();
$mother = $stmt->fetchAll(PDO::FETCH_ASSOC);

$data = ['mother'=>$mother];
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo json_encode($data);

?>