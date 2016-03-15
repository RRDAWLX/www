<?php
$comments = array();
array_push($comments, array('id'=>1, 'author'=>'Pete Hunt', 'text'=>'This is one comment'));
array_push($comments, array('id'=>2, 'author'=>'Jordan Walke', 'text'=>'This is *another* comment'));
array_push($comments, array('id'=>3, 'author'=>'rrdawlx', 'text'=>'This is wlx\'s comment'));

if($_SERVER['REQUEST_METHOD'] == 'POST'){
	array_push($comments, array('id'=>4, 'author'=>$_POST['author'], 'text'=>$_POST['text']));
}

header('Content-type: application/json, utf-8');
echo json_encode($comments);

?>
