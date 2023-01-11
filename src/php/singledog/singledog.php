<?php
require(__DIR__ . '/../config.php');
 $stmt = $pdo->prepare("SELECT dog.name AS dogname,
  	litter.born AS borndate,
  	sire,
  	dam,
  	dog.isBitch AS isBitch,
  	color.colorSWE AS dogColor,
  	tailSwe,
  	regnr,
  	event.date AS photodate,
  	headShot,
  	standLeft,
  	standRight,
  	place,
  	DATEDIFF(event.date,born) AS daysOld
  	FROM dog
  	INNER JOIN images ON dog.dogID = images.dogID
  	INNER JOIN color ON dog.colorID = color.colorID
  	INNER JOIN event ON images.eventID = event.eventID
  	INNER JOIN litter ON dog.litterID = litter.litterID
  	INNER JOIN origin ON dog.originID = origin.originID
  	INNER JOIN photographer ON images.photographerID = photographer.photographerID
  	INNER JOIN tail ON dog.tailID = tail.tailID
  	WHERE url=?");
    $stmt->execute([$url]);
    $result = $stmt->fetchAll();
$data = ['result'=>$result];
    header('Content-Type: application/json');
header('Access-Control-Allow-Origin:*');
echo json_encode($data);
    
?>