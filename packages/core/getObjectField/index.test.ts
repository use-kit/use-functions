import { describe, expect, it } from 'vitest'
import { getObjectField, objectFilter } from '.'

describe('should', () => {
  const obj = { name: 'asuka', age: 23, height: 158 }

  it('getObjectFiled', () => {
    expect(getObjectField(obj, ['name'])).toMatchInlineSnapshot(`
      {
        "name": "asuka",
      }
    `)
  })

  it('objectFilter', () => {
    expect(objectFilter(obj, (key: any) => {
      return ['name', 'age'].includes(key)
    })).toMatchInlineSnapshot(`
      {
        "age": 23,
        "name": "asuka",
      }
    `)
  })
})

// const obj = { name: 'asuka', age: 23, height: 158 }
// const ret = objectFilter(obj, (key: any, value: any) => {
//   console.log('key: ', key, 'value: ', value)
//   return ['name', 'age', 'height'].includes(key) && value > 24
// })

// const ret = getObjectFiled(obj, ['name', 'age'])
// console.log('ret: ', ret)
