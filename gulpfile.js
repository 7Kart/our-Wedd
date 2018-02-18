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
    var jsLibs = JSON.parse(fs.readFileSync("src/js-map-file.json"))["libs"];
    var jsAdmin = JSON.parse(fs.readFileSync("src/js-map-file.json"))["admin.js"];
    gulp.src(jsLibs)
        .pipe(concat("libs.js"))
        .pipe(gulp.dest('public/javascripts'));
    gulp.src(jsFiles)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat("main.js"))
        .pipe(gulp.dest('public/javascripts'));
    gulp.src(jsAdmin)
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat("admin.js"))
        .pipe(gulp.dest('public/javascripts'));
});

//сборка less в css
gulp.task('adminLess', () =>{
    // return gulp.src(['assets/less/**/*.less', 'bower_components/fullpage.js/dist/jquery.fullpage.css'])
    console.log("admin less");
    return gulp.src([
        'src/less/adminStyle/*.less',
        'src/less/adminStyle/*.css'
    ])
        .pipe(gulpIf(isDevelopment, sourceMaps.init()))
        .pipe(gLess({
            path:['/src/less/']
        }))
        .pipe(gulpIf(isDevelopment, sourceMaps.write()))
        .pipe(concat('admin.css'))
        .pipe(gulp.dest('public/stylesheets'));
});

//сборка  admin less в css
gulp.task('less', () =>{
    return gulp.src([
        'src/less/*.less',
        'src/less/pageStyles/*.css',
        'src/less/pageStyles/*.less',
    ])
        .pipe(gulpIf(isDevelopment, sourceMaps.init()))
        .pipe(gLess({
            path:['/src/less/']
        }))
        .pipe(gulpIf(isDevelopment, sourceMaps.write()))
        .pipe(concat('main.css'))
        .pipe(gulp.dest('public/stylesheets'));
});

//сборка шаблонов
gulp.task('partials', function(){
    console.log("read partials");
    const dirPath = "./src/partials";
    fs.readdir(dirPath, (err, dirFileList)=>{
        if(!err)
            if(dirFileList.length > 0){
                var templateObject = {};
                for(var i=0; i< dirFileList.length; i++){
                    var fileName = dirFileList[i];
                    var field = fileName.split('.')[0];
                    var fileData = fs.readFileSync(dirPath+"/"+fileName);
                    templateObject[field] = fileData.toString();
                }
                fs.writeFile('./src/js/partials.js', "window['template']="+JSON.stringify(templateObject), function(err){
                    if(!err)
                        console.log("file write");
                });
            }
            else
                console.log("folder is empty");
        else
            console.log("read dir error");
    });
});

//изменение файлов
gulp.task('watch', ()=>{
    gulp.watch('src/js/**/*.js', gulpsync.sync(['partials','concatJs']));
    gulp.watch('src/less/**/*.less', ['less', 'adminLess']);
    gulp.watch('src/partials/*.html', gulpsync.sync(['partials','concatJs']))
});

gulp.task('default', gulpsync.async([['partials', 'concatJs'], 'less', 'adminLess', 'watch']));


