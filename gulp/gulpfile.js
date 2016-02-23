var gulp = require('gulp'),
	less = require('gulp-less'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	imagemin = require('gulp-imagemin'),
	pngquant = require('imagemin-pngquant');

gulp.task('testLess', function(){
	gulp.src('./less/testLess.css')
		.pipe(less())
		.pipe(gulp.dest('./src'));
});

gulp.task('uglifyJs', function(){
	gulp.src('./js/*')
		.pipe(uglify())
		.pipe(rename({
			suffix: '-min'
		}))
		.pipe(gulp.dest('./src'));
});

gulp.task('imagemin', function(){
	gulp.src('./img/*')
		.pipe(imagemin({
			progressive: true,
			svgoPlugins: [{removeViewBox: false}],
			use: [pngquant()]
		}))
		.pipe(gulp.dest('./src'));
});

gulp.task('default', ['testLess', 'uglifyJs', 'imagemin']);

gulp.watch('js/*', ['uglifyJs'], function(e){
	console.log('File ' + event.path + ' was ' + event.type + ', running taskes...');
});