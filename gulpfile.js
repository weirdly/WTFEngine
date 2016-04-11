var gulp = require('gulp'),
    sass = require('gulp-sass'),
    jade = require('gulp-jade'),
    browserify = require('browserify'),
    babelify = require('babelify'),
    buffer = require('vinyl-buffer'),
    source = require('vinyl-source-stream'),
    del = require('del'),
    server = require('gulp-server-livereload'),
    ghPages = require('gulp-gh-pages'),
    minifier = require('gulp-minifier');

var config = {
    webDir: './web',
    minifier: {
        minify: true,
        collapseWhitespace: true,
        conservativeCollapse: true,
        minifyJS: true,
        minifyCSS: true
    }
};

gulp.task('artifacts', function () {
    gulp.src('artifacts/**/*')
        .pipe(gulp.dest(config.webDir));
});

gulp.task('js', function () {
    return browserify({
        entries: './src/scripts/main.js',
        insertGlobals : true
    }).transform(babelify, {
            presets: ['es2015'],
            compact: true,
            global: true
        })
        .bundle()
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(gulp.dest(config.webDir+'/js'))
});

gulp.task('fonts', function () {
    return gulp.src('./src/styles/fonts/*.{eot,svg,ttf,woff}')
        .pipe(gulp.dest(config.webDir+'/css/fonts'));
});

gulp.task('css', ['fonts'], function () {
    return gulp.src('./src/styles/**/[^_]*.scss')
        .pipe(sass({includePaths: ['./src/styles', './node_modules/bootstrap-sass/assets/stylesheets']}).on('error', sass.logError))
        .pipe(minifier(config.minifier))
        .pipe(gulp.dest(config.webDir+'/css'));
});

gulp.task('images', function () {
    return gulp.src('./src/images/**/*.{jpg,gif,png,ico}')
        .pipe(gulp.dest(config.webDir+'/images'));
});

gulp.task('templates', function () {
    var YOUR_LOCALS = {};

    return gulp.src('./src/templates/**/[^_]*.jade')
        .pipe(jade({
            locals: YOUR_LOCALS
        }))
        .pipe(gulp.dest(config.webDir))
        .on('error', function (error) {
            console.error('' + error);
        });
});

gulp.task('clean', function () {
    del.sync(['./web/**/*']);
});

gulp.task('watch', function () {
    gulp.watch('./src/images/**/*.{png,jpg,gif,ico}', ['images']);
    gulp.watch('./src/scripts/**/*.js', ['js']);
    gulp.watch('./src/styles/**/*.scss', ['css']);
    gulp.watch('./src/templates/**/*.jade', ['templates']);

    gulp.src(config.webDir)
        .pipe(server({
            livereload: true,
            open: true
        }));
});

gulp.task('deploy', ['build'], function () {
    return gulp.src('./web/**/*')
        .pipe(ghPages());
});

gulp.task('build', ['clean', 'artifacts', 'js', 'css', 'images', 'templates']);
gulp.task('default', ['build', 'watch']);
