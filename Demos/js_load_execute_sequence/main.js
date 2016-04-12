var body = document.body,
	script1 = document.createElement('script'),
	script2 = document.createElement('script');
	
script1.src = 'a.php';
//script1.async = false;
script2.src = 'b.php';
//script2.async = false;

body.appendChild(script1);
body.appendChild(script2);
