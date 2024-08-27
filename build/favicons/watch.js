import gulp from "gulp";

export default function watchFavicons() {
  gulp.watch('src/images/icon.png', gulp.series(['clean:favicons', 'build:favicons']));
}