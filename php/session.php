<?php session_start(); ?>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>session</title>
</head>

<body>
<?php
if(isset($_SESSION['views'])){
	$_SESSION['views'] += 1;
}else{
	$_SESSION['views'] = 1;
}
echo 'Views = ' . $_SESSION['views'];
?>
</body>
</html>