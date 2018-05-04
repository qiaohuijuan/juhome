//引入插件
var gulp = require('gulp');
var server = require('gulp-webserver');
//创建任务并启动
gulp.task('default', function() {
    gulp.src('.')
        .pipe(server({
            host: 'localhost',
            port: 9999,
            open: true,
            livereload: true,
            middleware: function(req, res, next) {
                next()
            }
        }))
})