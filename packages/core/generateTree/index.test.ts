import { describe, expect, it } from 'vitest'
import { generateTree } from '.'

describe('should', () => {
  it('generateTree', () => {
    const nodes = [
      { id: 'nogi', parent: 'root' },
      { id: 'asuka', parent: 'nogi' },
      { id: 'shiori', parent: 'nogi' },
    ]
    expect(generateTree(nodes)).toMatchInlineSnapshot(`
      [
        {
          "children": [
            {
              "id": "asuka",
              "parent": "nogi",
            },
            {
              "id": "shiori",
              "parent": "nogi",
            },
          ],
          "id": "nogi",
          "parent": "root",
        },
      ]
    `)
  })
})
