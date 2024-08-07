import { task, src, dest, watch, series } from 'gulp';
import sass, { logError } from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import minifyCss from 'gulp-minify-css';
import rename from 'gulp-rename';
import del from 'del';

const config = {
    srcCss: 'src/scss/**/*.scss', // Source SCSS files
    buildCss: 'build/css', // Output directory for compiled CSS
};

task('clean:css', function () {
    return del(config.buildCss);
});

task('build:css', function () {
    return src('src/scss/index.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', logError))
        .pipe(autoprefixer())
        .pipe(dest(config.buildCss)) // Output non-minified CSS
        .pipe(minifyCss())
        .pipe(rename({ extname: '.min.css' }))
        .pipe(dest('wwwroot/css')); // Output minified CSS
});

task('watch:css', function () {
    watch(config.srcCss, series('build-css'));
});

task('default', series('build-css', 'watch'));