var through = require('through2');
var gutil = require('gulp-util');
var PluginError = gutil.PluginError;
var opentype = require('opentype.js');
var bufferToArrayBuffer = require('buffer-to-arraybuffer');

const PLUGIN_NAME = 'gulp-fontface';

function gulpFontface(callback) {
	return through.obj(function (file, enc, cb) {
		if (file.isBuffer()) {
			var font = opentype.parse(bufferToArrayBuffer(file.contents));
			var data = {
				fullName: font.tables.name.fullName,
				fontFamily: font.tables.name.fontFamily,
				fontSubfamily: font.tables.name.fontSubfamily,
				fontStyle: /italic/i.test(font.tables.name.fontSubfamily) ? "italic" : "normal",
				fontWeight: /bold/i.test(font.tables.name.fontSubfamily) ? "bold" : "normal",
				path: file.relative.replace(/\\/g, '/'),
			};
			callback(data, file, function() {
				cb(null, file);
			});
		} else {
			cb(null, file);
		}
	});
}

module.exports = gulpFontface;
