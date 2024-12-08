import { src, dest } from 'gulp'

export default function buildImages(cb) {
  return src('src/images/**/*').pipe(dest('www/images'))
}
