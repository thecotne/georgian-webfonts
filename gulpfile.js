var gulp = require('gulp');
var fontface = require('./gulp-fontface');
var rename = require('gulp-rename');
var consolidate = require('gulp-consolidate');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var gcallback = require('gulp-callback');
var header = require('gulp-header');
var stripCssComments = require('gulp-strip-css-comments');

var head = '/*\n\
 * georgian-webfonts\n\
 * https://github.com/thecotne/georgian-webfonts\n\
 *\n\
 * Copyright (c) 2015 cotne nazarashvili\n\
 * Licensed under the MIT license.\n\
 */\n\
';

gulp.task('fontface', function() {
	return gulp.src('fonts/**/**.{ttf,otf}', {base: '.'})
		.pipe(fontface(function(data, end) {
			gulp
				.src('template.css')
				.pipe(consolidate('lodash', data))
				.pipe(rename({basename: data.fullName}))
				.pipe(header(head))
				.pipe(gulp.dest('css'))
				.pipe(gcallback(end))
		}))
});

gulp.task('default', ['fontface']);
