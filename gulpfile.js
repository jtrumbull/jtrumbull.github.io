import path from 'path';
import gulp from 'gulp';
import sass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import browserify from 'browserify';

const root = path.resolve(__dirname, '..');
const srcroot = path.join(root, 'src');
const wwwroot = path.join(root, 'wwwroot');

let cleanFavicons = async function () {}

let cleanFonts = async function () {}

let cleanImages = async function () {}

let cleanPages = async function () {}

let cleanScripts = async function () {}

let cleanStyles = async function () {}



let buildFavicons = async function () {}

let buildFonts = async function () {}

let buildImages = async function () {}

let buildPages = async function () {}

let buildScripts = async function () {}

let buildStyles = async function () {}

let buildAll = gulp.parallel(buildFavicons, buildFonts, buildImages, buildPages, buildScripts, buildStyles);