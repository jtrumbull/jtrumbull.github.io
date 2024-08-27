import gulp from "gulp";

export default function watchScripts() {
  gulp.watch('src/scripts/**/*.js', gulp.series(['clean:scripts', 'build:scripts']));
}