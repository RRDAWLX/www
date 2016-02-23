var fs = require('fs');

fs.readFile('arr.txt', function(err, data){
	if(err){
		console.log(err);
	}else{
		var arr = data.toString().split('\n'),
			len = arr.length,
			i;
		for(i = 0; i < len; i++){
			arr[i] = arr[i].trim();
		}
		
		console.log(arr);
	}
});