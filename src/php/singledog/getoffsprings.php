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
where litterID in
(SELECT litter.litterID FROM litter
    INNER JOIN dog ON dog.litterID = litter.litterID 
    WHERE sire = (SELECT name FROM dog WHERE url = '$url') OR dam = (SELECT name FROM dog WHERE url = '$url'))";


$stmt = $pdo->prepare($sql);
$stmt->execute();
$offspring = $stmt->fetchAll(PDO::FETCH_ASSOC);

$data = ['offspring'=>$offspring];
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
echo json_encode($data);

 ?>