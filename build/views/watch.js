import gulp from "gulp";

export default function watchViews() {
  gulp.watch('src/views/**/*.pug', gulp.series(['clean:views', 'build:views']));
}