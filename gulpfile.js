/**
 * Created by kristofer on 12.11.17.
 */
const gulp = require('gulp');
const babel = require('gulp-babel');
const fs = require('fs');
const concat = require('gulp-concat');
const gulpsync = require('gulp-sync')(gulp);
const gLess = require('gulp-less');
const gulpIf = require('gulp-if');
const sourceMaps = require('gulp-sourcemaps');
const isDevelopment = !process.env.NODE_ENV || process.env.NODE_ENV == "development";

//объединение всех файлов js
gulp.task('concatJs', () => {
    console.log("JS concat");
    var jsFiles = JSON.parse(fs.readFileSync("src/js-map-file.json"))["main.js"];
    gulp.src(jsFiles)
        .pipe(concat("main.js"))
        .pipe(gulp.dest('./src/js'))
});

gulp.task('less', function(){
    // return gulp.src(['assets/less/**/*.less', 'bower_components/fullpage.js/dist/jquery.fullpage.css'])
    return gulp.src([
        'src/less/*.less',
    ])
        .pipe(gulpIf(isDevelopment, sourceMaps.init()))
        .pipe(gLess({
            path:['/src/less/']
        }))
        .pipe(gulpIf(isDevelopment, sourceMaps.write()))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('public/stylesheets'));
});

//транспиляция в бабле
gulp.task('babel', () => {
    console.log("run babel");
    gulp.src('src/js/main.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('public/javascripts'))
});

gulp.task('watch',  function(){
    gulp.watch('src/js/*.js', gulpsync.sync(['concatJs', 'babel']));
});

gulp.task('default', gulpsync.async([['concatJs', 'babel'], 'less', 'watch']));