/**
 * Task to compile SCSS to CSS, add vendor prefixes, minify CSS, and generate sourcemaps.
 * @module build/styles
 * @requires gulp
 * @requires gulp-sass
 * @requires gulp-sourcemaps
 * @requires gulp-autoprefixer
 * @requires gulp-clean-css
 * @requires gulp-rename
 * @requires sass
 * @requires fancy-log
 * @requires chalk
 */

import { src, dest, series } from 'gulp';
import * as _sass from 'sass';
import _gulpsass from 'gulp-sass';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';

const sass = _gulpsass(_sass);

async function build() {
  return src('src/scss/index.scss') // Source SCSS files
    .pipe(sourcemaps.init()) // Initialize sourcemaps
    .pipe(sass({ style: 'expanded' }).on('error', sass.logError)) // Compile SCSS to CSS
    .pipe(autoprefixer()) // Add vendor prefixes
    .pipe(cleanCSS()) // Minify CSS
    .pipe(rename('index.min.css')) // Rename the output file
    .pipe(sourcemaps.write('.')) // Write sourcemaps
    .pipe(dest('wwwroot/styles')); // Output directory
}

let buildStyles = series(build);

export default buildStyles;