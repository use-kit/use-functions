import { describe, expect, it } from 'vitest'
import { fuzzyQuery } from '.'

describe('fuzz query', () => {
  const arr = [
    { id: 1, name: 'akashi' },
    { id: 2, name: 'asuka' },
    { id: 3, name: 'shiori' },
    { id: 4, name: 'rena' },
    { id: 5, name: 'zono' },
  ]

  it('search', () => {
    expect(fuzzyQuery(arr, 'shi', 'name')).toMatchInlineSnapshot(`
      [
        {
          "id": 1,
          "name": "akashi",
        },
        {
          "id": 3,
          "name": "shiori",
        },
      ]
    `)
  })
})
