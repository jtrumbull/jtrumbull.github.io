import { copy } from 'cpx'

export default function buildImages(cb) {
  copy('src/images/**/*', 'www/images', cb)
}
