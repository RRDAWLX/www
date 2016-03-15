<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>InsertData</title>
</head>

<body>
<?php
$servername = "localhost";
$username = "root";
$password = "admin";
$dbname = "phpdb";

try{
	$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	
	$sql = "insert into myguests (firstname, lastname, email)
		values('Tony', 'Wang', 'rrdawlx@gmail.com');";
	$conn->exec($sql);
	echo 'New record created successfully!';
}catch(PDOException $e){
	echo $sql . "<br>" . $e->getMessage();
}
?>
</body>
</html>