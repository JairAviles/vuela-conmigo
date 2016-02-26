'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass'),
	plumber = require('gulp-plumber');

// Styles Task
// Sass
gulp.task('sass', function () {
	return gulp.src('scss/**/*.scss')
	.pipe(plumber())
	.pipe(sass({
		outputStyle: 'compressed'
	}).on('error', sass.logError))
	.pipe(gulp.dest('css'));
	});

// Watch Task
// Watches JS
gulp.task('watch', function(){
	gulp.watch('scss/**/*.scss', ['sass']);
	});

gulp.task('default', ['sass', 'watch']);