var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	babel = require('gulp-babel');
	
// 压缩js文件
gulp.task('uglifyjs', function(){	
	gulp.src('./src/*.js')
		.pipe(uglify())
		.pipe(gulp.dest('./dest/src'));
});

// 编译es2015
gulp.task('es2015', function(){
	gulp.src('./src/es2015/*.js')
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('./dest/es2015'));
});

// 默认default任务
gulp.task('default', ['es2015']);

// 监视js文件
gulp.watch('./src/*.js', ['uglifyjs']).on('change', function(event){
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});

// 监视es2015文件
/*gulp.watch('./src/es2015/*.js', ['es2015']).on('change', function(event){
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});*/
