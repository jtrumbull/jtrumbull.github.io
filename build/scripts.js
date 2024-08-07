/**
 * This file is responsible for building the JavaScript files for the static site.
 * @module build/scripts
 * @requires gulp
 * @requires browserify
 * @requires vinyl-source-stream
 * @requires vinyl-buffer
 * @requires gulp-sourcemaps
 * @requires gulp-uglify
 */

import { dest } from 'gulp';
import browserify from 'browserify';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';
import sourcemaps from 'gulp-sourcemaps';
import uglify from 'gulp-uglify';

let buildScripts = async () => {
  return browserify('src/js/index.js', { debug: true }) // Specify your entry file (e.g., main.js)
    .bundle()
    .pipe(source('index.min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(uglify()) // Minify the code
    .pipe(sourcemaps.write('./'))
    .pipe(dest('wwwroot/scripts')); // Output directory
}

export default buildScripts;