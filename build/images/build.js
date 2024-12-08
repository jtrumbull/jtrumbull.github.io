import { src, dest } from 'gulp'

export default function buildImages(cb) {
  return src('src/images/**/*', { encoding: false }).pipe(dest('www/images'))
}
