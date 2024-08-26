#!/usr/bin/env node

import path from 'path';
import gulp from 'gulp';
import { deleteAsync } from 'del';
import _buildFavicons from './build/favicons.js';
import _buildPages from './build/pages.js';
import _buildStyles from './build/styles.js';
import _buildScripts from './build/scripts.js';
import watch from 'gulp-watch';

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
let cleanFonts = async () => deleteAsync([path.join(wwwroot, 'fonts')]);
let cleanImages = async () => deleteAsync([path.join(wwwroot, 'images')]);
let cleanPages = async () => deleteAsync([path.join(wwwroot, '*.html')]);
let cleanScripts = async () => deleteAsync([path.join(wwwroot, 'scripts')]);
let cleanStyles = async () => deleteAsync([path.join(wwwroot, 'styles')]);

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

let watchFavicons = watch(path.join(root, 'src/img/icon.png'), buildFavicons);

let watchFonts = watch(path.join(root, 'node_modules/bootstrap-icons/font/fonts/*'), buildFonts);

let watchImages = watch(path.join(root, 'src/img/*'), buildImages);

let watchPages = watch(path.join(root, 'src/pug/**/*.pug'), buildPages);

let watchScripts = watch(path.join(root, 'src/js/**/*.js'), buildScripts);

let watchStyles = watch(path.join(root, 'src/scss/**/*.scss'), buildStyles);

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

let cleanAll = gulp.parallel(cleanFavicons, cleanFonts, cleanImages, cleanPages, cleanScripts, cleanStyles);
gulp.task('clean:all', cleanAll);

let buildAll = gulp.parallel(buildFavicons, buildFonts, buildImages, buildPages, buildScripts, buildStyles);
gulp.task('build:all', buildAll);

let watchAll = gulp.parallel('watch:favicons', 'watch:fonts', 'watch:images', 'watch:pages', 'watch:scripts', 'watch:styles');
gulp.task('watch:all', watchAll);
