import { describe, expect, it } from 'vitest'
import { getField } from '.'

describe('getField', () => {
  const obj = { name: 'asuka', age: 23, height: 158, deep: { one: '1' } }

  it('default', () => {
    expect(getField(obj, 'name')).toMatchInlineSnapshot('"asuka"')
  })

  it('preset', () => {
    expect(getField(obj, 'use', { use: 'akashi' })).toMatchInlineSnapshot(`
      {
        "use": "akashi",
      }
    `)
  })

  it('undefine', () => {
    expect(getField(obj, 'test')).toMatchInlineSnapshot('undefined')
  })

  it('array', () => {
    expect(getField(obj, ['name'])).toMatchInlineSnapshot('"asuka"')
  })

  it('deep array', () => {
    expect(getField(obj, ['deep', 'one'])).toMatchInlineSnapshot('"1"')
  })
})
