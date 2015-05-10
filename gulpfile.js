var gulp = require('gulp');
var fontface = require('./gulp-fontface');
var rename = require('gulp-rename');
var consolidate = require('gulp-consolidate');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var gcallback = require('gulp-callback');
var header = require('gulp-header');
var stripCssComments = require('gulp-strip-css-comments');
var path = require('path');

var head = '/*\n\
 * georgian-webfonts\n\
 * https://github.com/thecotne/georgian-webfonts\n\
 *\n\
 * Copyright (c) 2015 cotne nazarashvili\n\
 * Licensed under the MIT license.\n\
 */\n\
';

gulp.task('fontface', function() {
	return gulp.src('fonts/**/**', {base: '.'})
		.pipe(fontface(function(data, file, end) {
			gulp
				.src('template.css')
				.pipe(consolidate('lodash', data))
				.pipe(rename({basename: data.fullName}))
				.pipe(header(head))
				.pipe(gulp.dest('css'))
				.pipe(gcallback(end))
		}))
});

gulp.task('addFonts', function() {
	var stream = gulp.src('newfonts/**/**', {base: 'newfonts'});
	var stream = stream.pipe(fontface(function(data, file, end) {
		var dir = path.dirname(file.path);
		var ext = path.extname(file.path).toLowerCase();
		file.path = dir+'/'+data.fullName+ext;
		end();
	}));
	stream.pipe(gulp.dest('fonts'));
});

gulp.task('default', ['fontface']);
