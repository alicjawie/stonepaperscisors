var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');
var refresh = require('gulp-refresh');
var sassFiles = 'scss/*.scss';
var cssDest = 'css/'

gulp.task('sass', function(){
  return gulp.src(sassFiles)
    .pipe(sass())
    .pipe(gulp.dest(cssDest))
    .pipe(refresh());
});

gulp.task('watch',function() {
    refresh.listen()
    gulp.watch(sassFiles,['sass']);
});
