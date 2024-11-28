
import fs from 'fs/promises';
import pug from 'pug';
import readDirectory from "../helpers/read-directory.js"
import { sourcePath, View } from './view.js';

export default function buildViews() {
  return new Promise((resolve, reject) => {

    readDirectory(sourcePath, { withFileTypes: true, recursive: true })
      .then((dirents) => dirents.filter((dirent) => dirent.name.endsWith('.pug')))
      .then((dirents) => dirents.filter((dirent) => dirent.name !== 'layout.pug'))
      .then((dirents) => dirents.filter((dirent) => !dirent.parentPath.endsWith('includes')))
      .then((dirents) => {

        const views = dirents.map((file) => new View(file.name, file.parentPath));
        const promises = views.map(view => view.render());
        
        Promise.all(promises).then(resolve).catch(reject);

      })
      .catch(reject);
      
    });
}