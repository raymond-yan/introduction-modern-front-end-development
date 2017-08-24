var gulp = require('gulp');
var pump = require('pump');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
/**
 * es6->es5
 */
gulp.task('es6', function(cb) {
  pump([
        gulp.src('js/es6.js'),
        babel({presets: ['es2015']}),
        rename("main.js"),
        gulp.dest("js/")
      ],
      cb
  );
});

gulp.task('scss', function(cb) {
  pump([
    gulp.src('scss/*.scss'),
    sass(),
    gulp.dest("css/")
  ], cb);
});

/**
 * 監控 js, jsx, html, css 變化就重新編譯
 */
gulp.task('watch', function() {
  // console.log( 'watch 跑' );
  gulp.watch('js/es6.js', ['es6']);
  gulp.watch('scss/*', ['scss']);
});

gulp.task('dev', ['es6', 'scss']);

gulp.task('default', ['es6', 'watch']);

