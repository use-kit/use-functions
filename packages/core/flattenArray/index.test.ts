import { describe, expect, it } from 'vitest'
import { flattenArray } from '.'

describe('should', () => {
  it('exported', () => {
    const arr = ['akashi', ['asuka', ['nanasei']], ['shiori', 'mizuki']]
    expect(flattenArray(arr)).toMatchInlineSnapshot(`
      [
        "akashi",
        "asuka",
        "nanasei",
        "shiori",
        "mizuki",
      ]
    `)
  })
})
