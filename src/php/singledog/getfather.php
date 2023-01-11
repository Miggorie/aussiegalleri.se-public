<?php






$stmt = $conn->prepare("SELECT * from dog 
INNER JOIN images ON dog.dogID = images.dogID 
INNER JOIN event ON images.eventID = event.eventID 
where littersID = (select littersID from dog where url = :url ) and url != :url");
$stmt->execute(array(':url' => $url));
$littermates = $stmt->fetchAll();

$data = ['littermates'=>$littermates];
header('Content-Type: application/json');
header('Access-Control-Allow-Origin:*');
echo json_encode($data);

?>