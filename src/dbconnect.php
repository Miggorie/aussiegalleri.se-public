<?php
$host = "aussiegalleri-202794.mysql.binero.se";
$db = "202794-aussiegalleri";
$username = "202794_oo25539";
$pass = "gkRQbl09zx";
$charset = "utf8mb4";

// Create connection
$dsn = "mysql:host={$host};dbname={$db};charset={$charset}";

$options = [
PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
];

try {
  $pdo = new PDO($dsn, $username, $pass, null);
} catch (\PDOException $e) {
  throw new \PDOException($e->getMessage(), (int)$e->getCode());
};
?>