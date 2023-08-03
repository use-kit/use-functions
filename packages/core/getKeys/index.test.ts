import { describe, expect, it } from 'vitest'
import { getKeys } from '.'

describe('getKeys', () => {
  it('get keys', () => expect(getKeys({ name: 'asuka', age: 24 })).toMatchInlineSnapshot(`
    [
      "name",
      "age",
    ]
  `))

  const map = new Map([
    ['akashi', { id: 'akashi' }],
    ['asuka', { id: 'asuka' }],
  ])

  it('get map keys', () => {
    expect(getKeys(map)).toMatchInlineSnapshot(`
      [
        "akashi",
        "asuka",
      ]
    `)
  })
})
