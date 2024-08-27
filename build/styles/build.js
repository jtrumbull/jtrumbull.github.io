import { normalize } from "path"; 
import writeFile from "../helpers/write-file.js";
import * as sass from "sass";

export default function buildStyles() {
  return new Promise((resolve, reject) => {
    const promises = [];
    const options = {
      sourceMap: false,
      loadPaths: ["node_modules"],
    };
    const result = sass.compile("src/styles/index.scss", options);
    promises.push(writeFile(normalize("www/styles/app.css"), result.css))
    Promise.all(promises).then(resolve).catch(reject);
  });
}
