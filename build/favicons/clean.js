import chalk from "chalk";
import cleanFiles from "../helpers/clean-files.js";
import readDirectory from "../helpers/read-directory.js";
import path from "path";
import { info } from "fancy-log";

const faviconsPath = path.resolve("www/favicons");

export default function cleanFavicons() {
  return new Promise((resolve, reject) => {
    readDirectory(faviconsPath, { recursive: true, withFileTypes: true })
      .then((files) => {
        if (files.length == 0) {
          info(chalk.gray("No favicons found to clean."));
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
