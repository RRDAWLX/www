var gulp = require('gulp'),
	uglify = require('gulp-uglify');
	
// 压缩js文件
gulp.task('uglifyjs', function(){	
	gulp.src('./src/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dest/src'));
});

// 默认default任务
gulp.task('default', ['uglifyjs']);

// 监视js文件
gulp.watch('./src/*.js', ['uglifyjs']).on('change', function(event){
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
