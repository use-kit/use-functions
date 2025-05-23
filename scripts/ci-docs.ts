import fs from 'node:fs'
import fg from 'fast-glob'
import { mkdirp } from 'mkdirp'
import { scan } from '@use-kit/node'

// const root = path.dirname(process.cwd())

function ci() {
  const pkgs = './packages'
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

// function ciTest() {
//   fsExtra.copy('packages/', 'doctest/', {
//     filter: (file) => {
//       console.log(file)
//       const isFile = fsExtra.statSync(file).isFile()
//       const isMdFile = isFile && file.endsWith('.md')
//       const isExampleDir = !isFile && !file.includes('docs') && !file.includes('utils')
//       return isMdFile || isExampleDir
//     },
//   })
// }

// ciTest()
