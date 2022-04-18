const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const less = require('gulp-less');
const rename = require('gulp-rename');
const autoprefixer = require('gulp-autoprefixer');

// 编译less
gulp.task('css', function () {
    return gulp.src('../src/styles/index.less')
        .pipe(less({
            javascriptEnabled: true
        }))
        .pipe(
            autoprefixer({
                overrideBrowserslist: ['last 2 versions', 'ie > 8']
            })
        )
        .pipe(cleanCSS())
        .pipe(rename('viewuiplus.css'))
        .pipe(gulp.dest('../dist/styles'));
});

// 拷贝字体文件
gulp.task('fonts', function () {
    return gulp.src('../src/styles/common/iconfont/fonts/*.*')
        .pipe(gulp.dest('../dist/styles/fonts'));
});

gulp.task('default', gulp.parallel('css', 'fonts'));

