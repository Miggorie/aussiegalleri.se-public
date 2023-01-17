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
$sql = "SELECT * FROM dog
INNER JOIN images ON dog.dogID = images.dogID
INNER JOIN event ON images.eventID = event.eventID
where name =
  (select dam from dog INNER JOIN litter ON dog.litterID = litter.litterID where url='$url')
UNION
SELECT * FROM dog
INNER JOIN images ON dog.dogID = images.dogID
INNER JOIN event ON images.eventID = event.eventID
where name =
  (select sire from dog INNER JOIN litter ON dog.litterID = litter.litterID where url='$url')";

$stmt = $pdo->prepare($sql);
$stmt->bindParam(':url', $url);
$stmt->execute();
$parents = $stmt->fetchAll(PDO::FETCH_ASSOC);

$data = ['parents'=>$parents];
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo json_encode($data);

?>