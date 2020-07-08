const gulp = require('gulp')

const cssmin = require('gulp-cssmin')

const autoprefixer = require('gulp-autoprefixer')

const del = require('del')

const htmlmin = require('gulp-htmlmin')

const babel = require('gulp-babel')

const uglify = require('gulp-uglify')

const webserver = require('gulp-webserver')

const sass = require('gulp-sass')

const sassHandler = ()=>{
    return gulp.src('./sass/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./css'))
}
const cssHandler = ()=>{
    return gulp.src('./css/*.css')
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}
const libHandler = ()=>{
    return gulp.src('./lib/**')
    .pipe(gulp.dest('./dist/lib'))
}
const imagesHandler = ()=>{
    return gulp.src('./imgs/**')
    .pipe(gulp.dest('./dist/imgs'))
}

const htmlHandler = ()=>{
    return gulp.src('./pages/*.html')
    .pipe(htmlmin({
        removeAllListeners:true,
        collapseWhitespace:true,
        minifyCSS:true,
        minifyJS:true
    }))
    .pipe(gulp.dest('./dist/pages'))    
}

const delHandler = ()=>{
    return del(['./dist'])
}

const jsHandler = ()=>{
    return gulp.src('./js/*.js')
    .pipe(babel({
        presets:['@babel/env'],
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}

const watchHandler = ()=>{
    gulp.watch('./sass/*.scss',sassHandler),
    gulp.watch('./css/*.css',cssHandler)
    gulp.watch('./html/*.html',htmlHandler)
    gulp.watch('./js/*.js',jsHandler)
}


module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(sassHandler,htmlHandler,jsHandler,cssHandler,imagesHandler,libHandler),
    watchHandler,
)