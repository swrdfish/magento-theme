var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var csso = require('gulp-csso');
var htmlmin = require('gulp-htmlmin');


gulp.task('cssmin', function() {
	var DEST = '../';
 	return gulp.src([
		"bootstrap.min.css",
		"magnific-popup.css",
		"fonts.css",
		"style.css",
		"responsive.css",
		"spacings.css",
		"animate.css"
  	])
    .pipe(concat('main.css'), {newLine: '\n\n\n\n\n\n\n\n'})
    .pipe(rename('main.min.css'))
    .pipe(csso({comments: 'none'}))
    .pipe(gulp.dest(DEST));
});



gulp.task('default', function() {
	gulp.start('cssmin');
})