import { dirname, normalize } from "path";
import fs from "fs/promises";
import chalk from "chalk";
import { info } from "fancy-log";
import ensureDirectory from "./ensure-directory.js";

export default function writeFile(file, data, options) {
  return new Promise((resolve, reject) => {
    file = normalize(file);
    var parent = dirname(file);
    ensureDirectory(parent)
      .then(() => {
        fs.writeFile(file, data, options)
          .then(() => info(`Wrote file '${chalk.green(file)}'`))
          .then(resolve)
          .catch(reject);
      })
      .catch(reject)
  });
}
