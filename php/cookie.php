<?php 
setcookie('user', 'rrdawlx', time()+3600);
?>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>Cookie</title>
</head>

<body>
<?php
if(isset($_COOKIE['user'])){
	echo 'Welcome ' . $_COOKIE['user'] . '<br/>';
}else{
	echo 'Welcome guest!<br/>';
}
?>
</body>
</html>
