import fs, { Dirent } from 'node:fs'

interface Options {
  filters: string[]
  type: 'file' | 'directory'
}

export function scan(path: string, opt: Partial<Options> = { filters: [], type: 'directory' }): fs.Dirent[] {
  return fs.readdirSync(path, { withFileTypes: true }).map((dirent: fs.Dirent) => {
    if (!(opt.filters || []).includes(dirent.name))
      return dirent
    return new Dirent()
  }).filter((f: fs.Dirent) => f.name && (opt.type === 'file' ? f.isFile() : f.isDirectory()))
}
