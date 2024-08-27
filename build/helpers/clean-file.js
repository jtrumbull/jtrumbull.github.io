import chalk from "chalk";
import { info } from "fancy-log";
import { rimraf } from "rimraf";

export default function cleanFile(filepath) {
  return rimraf(filepath).then(() =>
    info(`Cleaned file '${chalk.yellow(filepath)}'`)
  );
}
