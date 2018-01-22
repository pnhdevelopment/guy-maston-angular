var gulp = require('gulp');
var svgstore = require('gulp-svgstore');
var rename = require("gulp-rename");
var path = require('path');

gulp.task('default', function() {
	console.log('hi');
});


gulp.task('svgstore', function () {
    return gulp
        .src('src/assets/*.svg')
        .pipe(svgstore())
        .pipe(rename({basename: 'sprite'}))
        .pipe(gulp.dest('src/assets'));
});