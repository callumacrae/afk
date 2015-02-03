var gulp = require('gulp');
var loadLmnTask = require('lmn-gulp-tasks');

gulp.task('js', loadLmnTask('browserify', {
	src: 'index.js',
	dest: './dest/index.js'
}));

gulp.task('default', ['js'], function () {
	gulp.watch('index.js', ['js']);
});