<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>CreateTable</title>
</head>

<body>
<?php
$servername = "localhost";
$username = "root";
$password = "admin";
$dbname = "phpdb";

try {
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
	$sql = 'create table MyGuests (
		id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
		firstname VARCHAR(30) NOT NULL,
		lastname VARCHAR(30) NOT NULL,
		email VARCHAR(50),
		reg_date TIMESTAMP
    )';
	
	$conn->exec($sql);
	echo 'Tabel MyGuests created successfully!';
}catch(PDOException $e){
	echo $sql . '<br/>' . $e->getMessage();
}
?>
</body>
</html>
