<? session_start(); ?>
<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>error</title>
</head>

<body>
<?php
if(isset($_SESSION['views'])){
	$_SESSION['views'] += 1;
}else{
	$_SESSION['views'] = 1;
}
echo 'views: ' . $_SESSION['views'] . '<br/>';

function customError($errno, $errstr){
	echo "<b>Error:</b> [$errno] $errstr";
}

set_error_handler('customError');

echo($test);
?>
</body>
</html>