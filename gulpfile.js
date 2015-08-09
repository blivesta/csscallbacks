var del = require('del');
var gulp = require('gulp');
var header = require('gulp-header');
var jshint = require('gulp-jshint');
var pkg = require('./package.json');
var rename = require('gulp-rename');
var runSequence = require('run-sequence');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');

var banner = [
'/*!',
' * <%= pkg.name %> v<%= pkg.version %>',
' * <%= pkg.description %>',
' * <%= pkg.homepage %>',
' * License : <%= pkg.license %>',
' * Author : <%= pkg.author %>',
' */',
''].join('\n');

var dirs = {
  src:'./src/',
  dist:'./dist/'
};

gulp.task('js', function(){
  return gulp.src(dirs.src + pkg.name + '.js')
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(header(banner, { pkg:pkg }))
    .pipe(gulp.dest(dirs.dist))
    .pipe(uglify())
    .pipe(rename({suffix: '.min'}))
    .pipe(header(banner, { pkg:pkg }))
    .pipe(gulp.dest(dirs.dist));
});

gulp.task('cleanup', function(){
  return del([ './dist' ]);
});

gulp.task('default',['build'], function(){
  gulp.watch(['./src/*.js'], ['js']);
});

gulp.task('build', function(cd){
  runSequence(
    'cleanup',
    ['js'],
    cd
  );
});
