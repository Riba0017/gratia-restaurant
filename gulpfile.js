let gulp = require ('gulp');
let less = require ('gulp-less');

gulp.task('style', function () {
    gulp.src('less/**/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'));
});

gulp.task('watch', ['style'], function () {
   gulp.watch('less/**/*.less', ['style'])
});
