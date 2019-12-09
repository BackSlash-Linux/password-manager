import fs from 'fs-extra'
import path from 'path'
import { app } from 'electron'

const appDir = () => {
  return path.join(app.getPath('appData'), app.name)
}

export default class Storage {
  constructor(file) {
    this.path = !path.isAbsolute(file) ? path.join(appDir(), file) : file
    fs.ensureFileSync(this.path)
  }

  read() {
    return this.import(this.path)
  }

  write(data) {
    try {
      fs.writeFileSync(this.path, data, { flag: 'w' })
      return true
    } catch (error) {
      return false
    }
  }

  import(path) {
    return fs.readFileSync(path).toString('utf8')
  }

  export(path) {
    const destination = !path.match(/\.pwmx$/) ? `${path}.pwmx` : path
    return fs.copyFileSync(this.path, destination)
  }
}
