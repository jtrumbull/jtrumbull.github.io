import fs from 'fs';
import pug from 'pug';
import { join, extname } from "path";
import readDirectory from "../helpers/read-directory.js"
import writeFile from "../helpers/write-file.js"

export const sourcePath = join('src/views');
const outputPath = join('www');
const sourceExt = '.pug';
const outputExt = '.html';

export class View {

  constructor(name, path) {
    this._name = name;
    this._path = path;
    this._data = undefined;
    this.fragment = path.replace(sourcePath, '');
  }

  get name() { 
    return this._name.replace(sourceExt, ''); 
  }

  get inputPath() {
    return join(sourcePath, this.fragment, `${this.name}${sourceExt}`,);
  }

  get outputPath() {
    return join(outputPath, this.fragment, `${this.name}${outputExt}`,);
  }

  get dataPath() {
    return this.inputPath.replace(sourceExt, '.json');
  }

  get data() {
    if (!this._data) {
      console.log(this.dataPath)
      if (fs.existsSync(this.dataPath)) {
        this._data = JSON.parse(fs.readFileSync(this.dataPath, 'utf8') || '{}');
      }
    }
    return this._data || {};
  }

  get template() { 
    return pug.compileFile(this.inputPath);
  }

  render() {
    return new Promise((resolve, reject) => {
      var html = this.template(this.data);
      writeFile(this.outputPath, html).then(resolve).catch(reject);
    });
  }

}