'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber'),
	livereload = require('gulp-livereload'),
	imagemin = require('gulp-imagemin'),
	prefix = require('gulp-autoprefixer'),
	connect = require('gulp-connect');

// Function for binding error handling
function errorLog(error) {
	console.error.bind(error);
	this.emit('end');
}

// Server task
// connect
gulp.task('server', function() {
	connect.server({
		root: __dirname,
		livereload: true,
		port : 8180,
	});
});

// Tags Task
// HTML
gulp.task('html', function(){
	gulp.src('/**/*.html')
	//.pipe(livereload());
	.pipe(connect.reload());
});

// Styles Task
// Sass
gulp.task('sass', function () {
	return gulp.src('scss/**/*.scss')
	.pipe(sass({
		outputStyle: 'compressed'
	}).on('error', errorLog))//sass.logError))
	.pipe(prefix('last 2 versions'))
	.pipe(gulp.dest('css'))
	//.pipe(livereload());
	.pipe(connect.reload());
});

// Image Task
// Compress Images
gulp.task('image', function(){
	gulp.src('img/**')
	.pipe(imagemin())
	.pipe(gulp.dest('build/img'))
	//.pipe(livereload());
	.pipe(connect.reload());
});

// Watch Task
gulp.task('watch', function(){
	livereload.listen();
	gulp.watch('/**/*.html', ['html']);
	gulp.watch('scss/**/*.scss', ['sass']);
	gulp.watch('img/**', ['image']);
});

gulp.task('default', ['sass', 'html', 'server', 'watch']);