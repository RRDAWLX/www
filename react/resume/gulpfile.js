var gulp = require('gulp'),
	react = require('gulp-react');

gulp.task('react', function(){
	return gulp.src('./assets/*.jsx')
			.pipe(react())
			.pipe(gulp.dest('./assets'));
});

gulp.watch('./assets/*.jsx', ['react']).on('change', function(e){
	console.log('File ' + e.path + ' is changed.');
});
