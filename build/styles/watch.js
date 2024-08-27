import gulp from "gulp";

export default function watchStyles() {
  gulp.watch('src/styles/**/*.scss', gulp.series(['clean:styles', 'build:styles']));
}