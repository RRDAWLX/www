<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>exception</title>
</head>

<body>
<?php
function checkNum($number){
	if($number > 1){
		throw new Exception("Value must be 1 or below");
	}
	return true;
}

try{
	checkNum(2);
	echo 'If you see this, the number is 1 or below.';
}catch(Exception $e){
	echo 'Message: ' . $e->getMessage();
}
?>
</body>
</html>