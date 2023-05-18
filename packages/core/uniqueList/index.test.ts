import { describe, expect, it } from 'vitest'
import { uniqueList } from '.'

describe('unique array', () => {
  it('number string', () => {
    const arr = [1, 2, 2, 3, '1', 'akashi', 1, 'asuka', 'akashi', 3, 4]
    expect(uniqueList(arr)).toMatchInlineSnapshot(`
      [
        1,
        2,
        3,
        "1",
        "akashi",
        "asuka",
        4,
      ]
    `)
  })

  it('object', () => {
    const arr = [
      { id: 1, name: 'akashi' },
      { id: 2, name: 'asuka' },
      { id: 3, name: 'akashi' },
      { id: 4, name: 'shiori' },
    ]
    expect(uniqueList(arr, 'name')).toMatchInlineSnapshot(`
      [
        {
          "id": 1,
          "name": "akashi",
        },
        {
          "id": 2,
          "name": "asuka",
        },
        {
          "id": 4,
          "name": "shiori",
        },
      ]
    `)
  })
})
