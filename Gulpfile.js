'use strict';

var gulp = require('gulp'),
	sass = require('gulp-sass');

// Styles Task
// Sass
gulp.task('sass', function () {
 return gulp.src('./scss/style.scss')
   .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
   .pipe(gulp.dest('./css'));
});

// Watch Task
// Watches JS
gulp.task('watch', function(){
	gulp.watch('./scss/style.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);