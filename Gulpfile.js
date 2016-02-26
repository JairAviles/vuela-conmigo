'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	livereload = require('gulp-livereload'),
	imagemin = require('gulp-imagemin');

function errorLog(error) {
	console.error.bind(error);
	this.emit('end');
}

// Styles Task
// Sass
gulp.task('sass', function () {
	return gulp.src('scss/**/*.scss')
	.pipe(sass({
		outputStyle: 'compressed'
	}).on('error', errorLog))//sass.logError))
	.pipe(gulp.dest('css'))
	.pipe(livereload());
});

// Image Task
// Compress Images
gulp.task('image', function(){
	gulp.src('img/**')
	.pipe(imagemin())
	.pipe(gulp.dest('build/img'));
});

// Watch Task
// Watches JS
gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('scss/**/*.scss', ['sass']);
	gulp.watch('img/**', ['image']);
});

gulp.task('default', ['sass', 'watch']);