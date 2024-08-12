import { describe, expect, it } from 'vitest'
import { mergeField } from '.'

describe('merge field', () => {
  it('should', () => {
    const target = { a: 'a', d: 'd' }
    const source = { a: 'b', b: 'b', c: 'c' }
    mergeField(target, source)
    expect(target).toMatchInlineSnapshot(`
      {
        "a": "b",
        "b": "b",
        "c": "c",
        "d": "d",
      }
    `)
  })
})
