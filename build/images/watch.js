import gulp from "gulp";

export default function watchImages() {
  gulp.watch('src/images/**/*', gulp.series(['clean:images', 'build:images']));
}