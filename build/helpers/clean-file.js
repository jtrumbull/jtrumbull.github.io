import chalk from "chalk";
import { info } from "fancy-log";
import { unlink } from 'fs/promises'

export default async function cleanFile(filepath) {
  await unlink(filepath)
  info(`Cleaned file '${chalk.yellow(filepath)}'`)
}
