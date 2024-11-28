import favicons from "favicons";
import path from "path";
import writeFile from "../helpers/write-file.js";

const inputPath = path.normalize("src/images/icon.png");
const includesPath = path.normalize("src/views/includes/favicons.pug");

const options = {
  path: "/favicons",
  appName: "Portfolio",
};

export default async function buildFavicons() {
  return new Promise((resolve, reject) => {
    favicons(inputPath, options)
      .then((result) => {

        var promises = [];
        const faviconsPath = (filepath) => path.join('www/favicons', filepath);
        const lines = result.html.map(line => {
          line = line.slice(1, -1);
          const tag = line.slice(0, 4); // link || meta
          const attributes = line.slice(5).split(' ').join(', ');
          return `${tag}(${attributes})`;
        });

        promises.push(...result.images.map((file) => writeFile(faviconsPath(file.name), file.contents)));
        promises.push(...result.files.map((file) => writeFile(faviconsPath(file.name), file.contents)));
        promises.push(writeFile(includesPath, lines.join('\n')));

        Promise.all(promises).then(resolve).catch(reject);
      })
      .catch(reject)
  });
}
