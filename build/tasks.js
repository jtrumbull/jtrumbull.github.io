import { parallel, series } from "gulp";
import buildFavicons from "./favicons/build.js";
import buildImages from "./images/build.js";
import buildScripts from "./scripts/build.js";
import buildStyles from "./styles/build.js";
import buildViews from "./views/build.js";
import cleanFavicons from "./favicons/clean.js";
import cleanImages from "./images/clean.js";
import cleanScripts from "./scripts/clean.js";
import cleanStyles from "./styles/clean.js";
import cleanViews from "./views/clean.js";
import watchFavicons from "./favicons/watch.js";
import watchImages from "./images/watch.js";
import watchScripts from "./scripts/watch.js";
import watchStyles from "./styles/watch.js";
import watchViews from "./views/watch.js";
export default [
  // Build tasks
  {
    name: "build:all",
    fn: series(
      parallel(
        buildFavicons,
      ),
      parallel(
        buildImages,
        buildScripts,
        buildStyles,
        buildViews
      )
    ),
    description: "Builds all targets",
  },
  {
    name: "build:favicons",
    fn: series(cleanFavicons, buildFavicons),
    description: "Builds favicons from source image",
  },
  {
    name: "build:images",
    fn: series(cleanImages, buildImages),
    description: "Copies source images to www root",
  },
  {
    name: "build:scripts",
    fn: series(cleanScripts, buildScripts),
    description: "Builds scripts from source ts",
  },
  {
    name: "build:styles",
    fn: series(cleanStyles, buildStyles),
    description: "Builds styles from source scss",
  },
  {
    name: "build:views",
    fn: series(cleanViews, buildViews),
    description: "Builds views from source pug",
  },
  // Clean tasks
  {
    name: "clean:all",
    fn: parallel(
      cleanFavicons,
      cleanImages,
      cleanScripts,
      cleanStyles,
      cleanViews
    ),
    description: "Clean all targets",
  },
  {
    name: "clean:favicons",
    fn: cleanFavicons,
    description: "Cleans the generated favicons",
  },
  {
    name: "clean:images",
    fn: cleanImages,
    description: "Cleans the generated images",
  },
  {
    name: "clean:scripts",
    fn: cleanScripts,
    description: "Cleans the generated scripts",
  },
  {
    name: "clean:styles",
    fn: cleanStyles,
    description: "Cleans the generated styles",
  },
  {
    name: "clean:views",
    fn: cleanViews,
    description: "Cleans the generated views",
  },
  // Watch tasks
  {
    name: "watch:all",
    fn: parallel(
      watchFavicons,
      watchImages,
      watchScripts,
      watchStyles,
      watchViews
    ),
    description: "Watch all targets",
  },
  {
    name: "watch:favicons",
    fn: watchFavicons,
    description: "Watches for changes in favicons and rebuilds",
  },
  {
    name: "watch:images",
    fn: watchImages,
    description: "Watches for changes in images and rebuilds",
  },
  {
    name: "watch:scripts",
    fn: watchScripts,
    description: "Watches for changes in scripts and rebuilds",
  },
  {
    name: "watch:styles",
    fn: watchStyles,
    description: "Watches for changes in styles and rebuilds",
  },
  {
    name: "watch:views",
    fn: watchViews,
    description: "Watches for changes in views and rebuilds",
  },
];
