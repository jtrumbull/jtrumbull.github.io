import chalk from "chalk";
import cleanFiles from "../helpers/clean-files.js";
import readDirectory from "../helpers/read-directory.js";
import path from "path";
import { info } from "fancy-log";

const viewsPath = path.resolve("www");

export default function cleanViews() {
  return new Promise((resolve, reject) => {
    readDirectory(viewsPath, { recursive: true, withFileTypes: true })
      .then((files) => {
        if (files.length == 0) {
          info(chalk.gray("No views found to clean."));
          return resolve();
        }

        const filepaths = files
          .filter((file) => file.isFile() && file.name.endsWith(".html"))
          .map((file) => path.join(file.parentPath, file.name));

        cleanFiles(filepaths).then(resolve).catch(reject);
      })
      .catch(reject);
  });
}
