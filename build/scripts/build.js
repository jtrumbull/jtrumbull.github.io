import { normalize } from "path";
import browserify from "browserify";
import writeFile from "../helpers/write-file.js";

export default function buildScripts() {
  return new Promise(async (resolve, reject) => {

    const instance = browserify();
    const inputPath = normalize("src/scripts/index.js");
    const outputPath = normalize("www/scripts/app.js");

    instance.add(inputPath);
    
    let content = '';
    let bundle = instance.bundle();
    
    bundle.on('data', chunk => {
      content += chunk;
    });
    
    bundle.on('end', () => {
      writeFile(outputPath, content).then(resolve).catch(reject);
    });

  });
}
