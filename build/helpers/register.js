import gulp from "gulp";
import template from "lodash/template.js";
const taskName = template("<%= action %>:<%= target %>");
const buildDescription = template("Build <%= target %>");
const cleanDescription = template("Clean <%= target %>");
const watchDescription = template("Watch <%= target %>");
export default function register(action, target, callback, description) {
  callback.description = description;
  gulp.task(taskName({ action, target }), callback);
}