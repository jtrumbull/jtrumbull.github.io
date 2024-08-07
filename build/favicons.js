/**
 * @fileoverview Generate favicons for the static site
 * @module build/favicons
 * @requires favicons
 * @requires path
 * @requires fs/promises
 * @requires fancy-log
 * @requires chalk
 * @requires yargs
 */

import favicons from 'favicons';
import path from 'path';
import fs from 'fs/promises';
import log from 'fancy-log';
import chalk from 'chalk';
import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

const argv = yargs(hideBin(process.argv)).argv;
const root = path.resolve('./');
const wwwroot = path.join(root, 'wwwroot');
const imgroot = path.join(wwwroot, 'icons');
const source = path.join(root, 'src/img/icon.png');
const filenames = {};

/**
 * Write manifest files returned by favicons
 * @param {*} response 
 * @returns Promise
 */

async function writeFiles(files) {
  for (let file of files) {
    filenames['/' + file.name] = '/' + file.name;
    await fs.writeFile(path.join(wwwroot, file.name), file.contents, 'utf8');
    log.info('File written: ' + chalk.gray(filenames['/' + file.name]));
  }
}

/**
 * Write the icon files returned by favicons
 * @param {*} response 
 * @returns Promise<void>
 */

async function writeIcons(icons) {
  await fs.mkdir(imgroot, { recursive: true });
  for (let icon of icons) {
    filenames['/' + icon.name] = '/icons/' + icon.name;
    await fs.writeFile(path.join(imgroot, icon.name), icon.contents, 'binary');
    log.info('Icon written: ' + chalk.gray(filenames['/' + icon.name]));
  }
}

/**
 * Write the HTML content returned by favicons
 * @param {*} response 
 * @returns 
 */

async function writeHTML(rows) {

  const attrRegex = /(\w+)\s*=\s*(?:"([^"]*)"|'([^']*)'|(\S+))/g;
  const handle = await fs.open('./src/pug/favicons.pug', 'w');

  for (let row of rows) {

    const attributes = {};
    let match;
    let tagName = row.substring(1, row.indexOf(' '));

    // Extract attributes from html string
    while ((match = attrRegex.exec(row)) !== null) {
      const key = match[1];
      const value = match[2] || match[3] || match[4];
      attributes[key] = value;
    }

    // Format the output
    let output = tagName + '(';
    let first = true;

    for (let key in attributes) {
      if (!first) output += ", ";
      if (key === 'href' || key === 'content') {
        attributes[key] = filenames[attributes[key]] || attributes[key];
      }
      output += key + '="' + attributes[key] + '"';
      first = false;
    }
    
    await handle.write(`${output}\n`);
  }
  await handle.close();
  log.info('HTML written: ' + chalk.gray('/src/pug/favicons.pug'));
}

/**
 * Generate favicons
 * @param {*} source
 * @returns Promise<void>
 */

export default async function generateFavicons() {

  const cachefile = path.join(imgroot, 'icon.cache');

  // Check if the source file has changed
  if (!argv.force) {
    try {
      const cache = await fs.readFile(cachefile, 'utf8');
      const input = await fs.readFile(source, 'utf8');
      if (cache === input) {
        log.info('Favicons are up to date ' + chalk.gray('(run with --force to regenerate)'));
        return;
      } else {
        log.info('Source file has changed');
      }
    } catch (error) {
      // Cache file not found
    }
  }

  log.info(chalk.bold('Generating favicons') + '...')
  
  // Generate the favicons
  const config = {
    // TODO: Add configuration
  };
  const response = await favicons(source, config);

  await writeFiles(response.files);
  await writeIcons(response.images);
  await writeHTML(response.html);

  // Write the cache file
  try {
    await fs.copyFile(source, cachefile);
    log.info('Cache written: ' + chalk.gray('/icons/icon.cache'));
  } catch (error) {
    log.error('Error writing cache file\n' + chalk.red(error));
  }
}
