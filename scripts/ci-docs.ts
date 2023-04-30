import fs, { Dirent } from 'node:fs'
import path from 'node:path'
import fg from 'fast-glob'
import { mkdirp } from 'mkdirp'

interface Opt {
  filters: string[]
  type: 'file' | 'directory'
}

const root = path.dirname(process.cwd())

function scan(path: string, opt: Partial<Opt> = { filters: [], type: 'directory' }): fs.Dirent[] {
  return fs.readdirSync(path, { withFileTypes: true }).map((dirent: fs.Dirent) => {
    if (!(opt.filters || []).includes(dirent.name))
      return dirent
    return new Dirent()
  }).filter((f: fs.Dirent) => f.name && opt.type === 'file' ? f.isFile() : f.isDirectory())
}

function ci() {
  const pkgs = `${root}/packages`
  const folders = scan(pkgs, { filters: ['docs', 'utils'] })

  folders.forEach((dir: fs.Dirent) => {
    const folder = `${pkgs}/docs/${dir.name}`
    // fs.rmSync(folder, { force: true, recursive: true })

    const contents = scan(`${pkgs}/${dir.name}`)
    contents.forEach(async (cdir: fs.Dirent) => {
      const cf = `${folder}/${cdir.name}`
      mkdirp.sync(cf)

      const files = await fg(`${pkgs}/${dir.name}/${cdir.name}/index.md`)
      files.length && fs.copyFileSync(files[0], `${cf}/index.md`)
    })
  })
}

ci()
