import { describe, expect, it } from 'vitest'
import { getValues } from '.'

describe('getField', () => {
  it('get values', () => expect(getValues({ name: 'asuka', age: 24 })).toMatchInlineSnapshot(`
    [
      "asuka",
      24,
    ]
  `))

  it('get string values', () => {
    expect(getValues('akashi')).toMatchInlineSnapshot(`
      [
        "a",
        "k",
        "a",
        "s",
        "h",
        "i",
      ]
    `)
  })

  const map = new Map([
    ['akashi', { id: 'akashi' }],
    ['asuka', { id: 'asuka' }],
  ])

  it('get map values', () => {
    expect(getValues(map as any)).toMatchInlineSnapshot(`
      [
        {
          "id": "akashi",
        },
        {
          "id": "asuka",
        },
      ]
    `)
  })
})
