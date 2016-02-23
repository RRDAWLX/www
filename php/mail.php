<!DOCTYPE HTML>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>mail</title>
</head>

<body>
<?php
$to = "815311850@qq.com";
$subject = "Test mail";
$message = "Hello! This is php mail test.";
$from = "someone@example.com";
$headers = "From:" . $from;
mail($to, $subject, $message, $headers);
echo "Mail Sent.";
?>
</body>
</html>