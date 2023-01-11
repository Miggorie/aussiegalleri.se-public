<?php
require('config.php');

$numberOfDogs= "SELECT COUNT(*)
FROM dog";
$bitches="SELECT COUNT(*)
FROM dog
WHERE isBitch=0";
$dogsCount="SELECT COUNT(*)
FROM dog
WHERE isBitch=1";
$pupcount="SELECT COUNT(*)
FROM dog
INNER JOIN images on dog.dogID = images.dogID
WHERE isPuppy=0";


$result = $conn->query($numberOfDogs);
$row = mysqli_fetch_row($result);
$totalDogs= $row[0];

$result = $conn->query($bitches);
$row = mysqli_fetch_row($result);
$bitchesCount= $row[0];

$result = $conn->query($dogsCount);
$row = mysqli_fetch_row($result);
$dogs= $row[0];

$result = $conn->query($pupcount);
$row = mysqli_fetch_row($result);
$puppycount= $row[0];

$conn->close();
?> 