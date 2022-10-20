import { describe, expect, it } from 'vitest'
import { flattenTree } from '.'

describe('should', () => {
  it('exported', () => {
    const tree = [{
      id: 'nogi',
      children: [{ id: 'asuka', parent: 'nogi' }, { id: 'shiori', parent: 'nogi' }],
    }]
    expect(flattenTree(tree)).toMatchInlineSnapshot(`
      [
        {
          "id": "asuka",
          "parent": "nogi",
        },
        {
          "id": "shiori",
          "parent": "nogi",
        },
        {
          "id": "nogi",
        },
      ]
    `)
  })
})
