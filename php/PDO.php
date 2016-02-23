<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>PDO</title>
</head>
<body>
<?php
$servername = 'localhost';
$username = 'root';
$password = 'admin';

try {
	$conn = new PDO("mysql:host=$servername;dbname=my_db", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	$sql = 'create database phpdb';
	$conn->exec($sql);
	echo 'Database created successfully<br/>';
}catch(PDOException $e){
	echo $sql . '<br/>' . $e->getMessage();
}

$conn = null;
?>
</body>
</html>
