#!/usr/bin/env node

import path from 'path';
import gulp from 'gulp';
import { deleteAsync } from 'del';
import _buildFavicons from './build/favicons.js';
import _buildPages from './build/pages.js';
import _buildStyles from './build/styles.js';
import _buildScripts from './build/scripts.js';

const root = path.resolve('./');
const srcroot = path.join(root, 'src');
const wwwroot = path.join(root, 'wwwroot');

/**
 * Clean favicons
 */

let cleanFavicons = async () => deleteAsync([
    path.join(wwwroot, 'icons'),
    path.join(wwwroot, 'browserconfig.xml'),
    path.join(wwwroot, 'manifest.webmanifest'),
    path.join(wwwroot, 'yandex-browser-manifest.json'),
    path.join(srcroot, 'pug/favicons.pug')
]);

/**
 * Clean fonts
 */

let cleanFonts = async () => deleteAsync([path.join(wwwroot, 'fonts')]);

/**
 * Clean images
 */

let cleanImages = async () => deleteAsync([path.join(wwwroot, 'images')]);

/**
 * Clean pages
 */

let cleanPages = async () => deleteAsync([path.join(wwwroot, '*.html')]);

/**
 * Clean scripts
 */

let cleanScripts = async () => deleteAsync([path.join(wwwroot, 'scripts')]);

/**
 * Clean styles
 */

let cleanStyles = async () => deleteAsync([path.join(wwwroot, 'styles')]);

/**
 * Clean all
 */

let cleanAll = gulp.parallel(cleanFavicons, cleanFonts, cleanImages, cleanPages, cleanScripts, cleanStyles);

/**
 * Build favicons
 */

let buildFavicons = _buildFavicons;

/**
 * Build fonts
 */

let buildFonts = async () => gulp.src("node_modules/bootstrap-icons/font/fonts/*").pipe(gulp.dest("wwwroot/fonts"));

/**
 * Build images
 */

let buildImages = async () => gulp.src("src/img/*").pipe(gulp.dest("wwwroot/images"));

/**
 * Build pages
 */

let buildPages = _buildPages;

/**
 * Build scripts
 */

let buildScripts = _buildScripts;

/**
 * Build styles
 */

let buildStyles = _buildStyles;

/**
 * Build all
 */

let buildAll = gulp.parallel(buildFavicons, buildFonts, buildImages, buildPages, buildScripts, buildStyles);

let watchFavicons = async function () {}

let watchFonts = async function () {}

let watchImages = async function () {}

let watchPages = async function () {}

let watchScripts = async function () {}

let watchStyles = async function () {}

let watchAll = gulp.parallel(watchFavicons, watchFonts, watchImages, watchPages, watchScripts, watchStyles);

// Define tasks

gulp.task('clean:favicons', cleanFavicons);
gulp.task('clean:fonts', cleanFonts);
gulp.task('clean:images', cleanImages);
gulp.task('clean:pages', cleanPages);
gulp.task('clean:scripts', cleanScripts);
gulp.task('clean:styles', cleanStyles);
gulp.task('build:favicons', buildFavicons);
gulp.task('build:fonts', buildFonts);
gulp.task('build:images', buildImages);
gulp.task('build:pages', buildPages);
gulp.task('build:scripts', buildScripts);
gulp.task('build:styles', buildStyles);
gulp.task('watch:favicons', watchFavicons);
gulp.task('watch:fonts', watchFonts);
gulp.task('watch:images', watchImages);
gulp.task('watch:pages', watchPages);
gulp.task('watch:scripts', watchScripts);
gulp.task('watch:styles', watchStyles);