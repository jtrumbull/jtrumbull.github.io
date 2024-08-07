import path from 'path';
import fs from 'fs/promises';
import log from 'fancy-log';
import chalk from 'chalk';
import yargs from 'yargs/yargs';
import { series } from 'gulp';

const argv = yargs(hideBin(process.argv)).argv;
const root = path.resolve('./');
const wwwroot = path.join(root, 'wwwroot');

let transpileScripts = async () => {};
let browserifyScripts = async () => {};
let minifyScripts = async () => {};
let buildScripts = series(transpileScripts, browserifyScripts, minifyScripts);