/**
 * Created by bo on 2017/6/30.
 */
var gulp=require('gulp');
var less=require('gulp-less');
var browserSync=require('browser-sync').create();
var useref = require('gulp-useref');
var uglify=require('gulp-uglify');
var gulpIf = require('gulp-if');
var cssnano=require('gulp-cssnano');
var imagemin=require('gulp-imagemin');
var del=require('del');
var runSequence=require('run-sequence');
var htmlmin = require('gulp-htmlmin');
// 编译less
gulp.task('less',function () {
    return gulp.src('www/css/style.less')
             .pipe(less())
             .pipe(gulp.dest('dist'))
             .pipe(browserSync.reload({
                  stream:true
              }))
});
// 创建服务器
gulp.task('browserSync',function () {
    browserSync.init({
        server:{
            baseDir:'src'
        }
    })
});
//压缩js，css
gulp.task('useref',function(){
    return gulp.src('app/*.html')
        .pipe(useref())
        .pipe(gulpIf('*.js',uglify()))
        .pipe(gulpIf('*.css',cssnano()))
        .pipe(gulp.dest('dist'))
});
//压缩图片
gulp.task('images',function () {
    return gulp.src('app/img/**/*.+(png|jpg|gif|svg|jpeg)')
        .pipe(imagemin({
            interlaced: true
        }))
        .pipe(gulp.dest('dist/img'))
});
//字体转移
gulp.task('fonts',function () {
    return gulp.src('app/fonts/**/*')
        .pipe(gulp.dest('dist/fonts'))
});
// 监听
gulp.task('watch',['less','browserSync'],function () {
    gulp.watch('app/less/style.less',['less']);
    gulp.watch('app/*.html',browserSync.reload);
    gulp.watch('app/js/**/*.js', browserSync.reload);
});
//复制第三方插件
gulp.task('copy', function (done) {
    return gulp.src('app/js/jquery-3.1.1.min.js')
        .pipe(gulp.dest('dist/js'))
});
// 压缩html
gulp.task('html', function () {
    var options = {
        removeComments: true,
        collapseWhitespace: true,
        collapseBooleanAttributes: true,
        removeEmptyAttributes: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true,
        minifyJS: true,
        minifyCSS: true
    };
    return gulp.src('app/*.html')
        .pipe(htmlmin(options))
        .pipe(gulp.dest('dist'))//gulp dest是输出
});
gulp.task('clean',function () {
    return del.sync('dist')
});

//组合模式
gulp.task('build',function (callback) {
    runSequence('clean',['less','useref','images','fonts'],callback)
});
