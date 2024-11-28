#!/usr/bin/env node

import gulp from "gulp";
import tasks from "./build/tasks.js";

tasks.forEach((task) => {
  task.fn.description = task.description;
  gulp.task(task.name, task.fn);
});

gulp.task('default', gulp.series('clean:all', 'build:all'));