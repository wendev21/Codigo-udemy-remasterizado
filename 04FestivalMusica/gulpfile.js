const { src, dest, watch, parallel} = require("gulp");

//CSS
const sass = require('gulp-sass')(require('sass'));
const plumber = require('gulp-plumber');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const postcss = require('gulp-postcss');


//Imagenes
const imagemin = require('gulp-imagemin');
const webp = require('gulp-webp');
const cache = require('gulp-cache');
const avif = require('gulp-avif');

function css(done)
{    
    src('src/scss/**/*.scss')//identificar el atchivo de SASS
    .pipe(plumber())
    .pipe(sass())//compilarlo
    .pipe(postcss([autoprefixer(), cssnano() ]))
    .pipe(dest('build/css'));//almacenar el archivo

    done();
}

function versionwebp (done){
    const opciones = {
        quality: 50
    };
    src('src/img/**/*.{png,jpg}')
    .pipe(webp(opciones) )
    .pipe( dest('build/img'))
    done();
}

function versionavif (done){
    const opciones = {
        quality: 50
    };
    src('src/img/**/*.{png,jpg}')
    .pipe(avif(opciones) )
    .pipe( dest('build/img'))
    done();
}

function imagenes(done)
{
    const opciones = {
        optimizationLevel: 3 
    };
    src('src/img/**/*.{png, jpg}')
    .pipe(cache(imagemin(opciones)))
    .pipe( dest('build/img'))
    done();
}
function javascript(done){
    src('src/js/**/*.js')
    .pipe(dest('build/js'));

    done();
}
function dev(done)
{
    watch('src/scss/**/*.scss', css);
    watch('src/js/**/*.js', javascript);
    
    done();
}
exports.css = css;
exports.js = javascript;
exports.imagenes = imagenes;
exports.versionavif = versionavif;
exports.dev = parallel(versionwebp, javascript, dev, imagenes, versionavif);
exports.versionwebp = versionwebp;