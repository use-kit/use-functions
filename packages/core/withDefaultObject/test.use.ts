import { withDefaultObject } from '.'

const target = undefined
const source = { x: 0, y: 0 }
const ret = withDefaultObject(target, source)

console.log('target', target)
console.log('ret', ret)
