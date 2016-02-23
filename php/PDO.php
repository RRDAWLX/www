<?php
//$dbms = 'mysql';
//$host = 'localhost';
//$dbname = 'my_db';
//$user = 'root';
//$password = 'admin';
//$dsn = '$dbms:host=$host;dbname=$dbname';
//
//try{
//  $dbh = new PDO($dsn, $user, $password);
//  echo 'success!<br/>';
//  print_r($dbh->query('select * from persons'));
//  $dbh = null;
//}catch(PDOException $e){
//  die('Error: ' . $e->getMessage() . '<br/>');
//}
?>

<?php
$servername = "localhost";
$username = "root";
$password = "admin";
$dbname = 'my_db';

// 创建连接
$conn = new mysqli($servername, $username, $password, $dbname);

// 检测连接
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = 'select * from persons';
$result = $conn->query($sql);
print_r($result->fetch_all());
?>
