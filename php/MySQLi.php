<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>MySQLi</title>
</head>

<body>
<?php
$servername = 'localhost';
$username = 'root';
$password = 'admin';

$conn = new MySQLi($servername, $username, $password);

if($conn->connect_error){
	die("Connection failed: " . $conn->connect_error);
}

$sql = 'create database phpdb';
if($conn->query($sql) === true){
	echo 'Database created successfully';
}else{
	echo 'Error creating database: ' . $conn->error;
}

$conn->close();
?>
</body>
</html>