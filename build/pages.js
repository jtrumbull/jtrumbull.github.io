/**
 * Gulp tasks for building html pages from source pug files.
 * @file build/pages.js
 * @module build/pages
 * @requires gulp
 * @requires gulp-pug
 */

import { parallel } from "gulp";
import { src, dest } from "gulp";
import pug from "gulp-pug";

async function buildIndexPage() {
  return src('src/pug/index.pug') // Specify your Pug files
    .pipe(pug()) // Compile Pug to HTML
    .pipe(dest('wwwroot')); // Output directory (e.g., 'dist')
}

let buildPages = parallel(buildIndexPage);

export default buildPages;