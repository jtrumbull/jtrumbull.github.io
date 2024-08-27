import chalk from "chalk";
import cleanFiles from "../helpers/clean-files.js";
import readDirectory from "../helpers/read-directory.js";
import path from "path";
import { info } from "fancy-log";

const stylesPath = path.resolve("www/styles");

export default function cleanStyles() {
  return new Promise((resolve, reject) => {
    var options = { recursive: true, withFileTypes: true };
    readDirectory(stylesPath, options)
      .then((files) => {
        if (files.length == 0) {
          info(chalk.gray("No styles found to clean."));
          return resolve();
        }

        const filepaths = files
          .filter((file) => file.isFile())
          .map((file) => path.join(file.path, file.name));

        const dirpaths = files
          .filter((file) => file.isDirectory())
          .map((file) => path.join(file.path, file.name));

        cleanFiles(filepaths)
          .then(() => {
            cleanFiles(dirpaths).then(resolve).catch(reject);
          })
          .catch(reject);
      })
      .catch(reject);
  });
}
