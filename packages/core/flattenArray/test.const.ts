import { flattenArray } from '.'

const arr = ['akashi', ['asuka', ['nanasei']], ['shiori', 'mizuki']]

function flatten(arr: any[]): any[] {
  return arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
  }, [])
}

console.time('test function')
for (let i = 0; i < 10000; i++)
  flattenArray(arr)
console.timeEnd('test function')

console.time('test flatten')
for (let i = 0; i < 10000; i++)
  flatten(arr)
console.timeEnd('test flatten')
