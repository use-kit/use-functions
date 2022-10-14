import { describe, expect, it } from 'vitest'
import { composeTree } from '.'

const list = [{
  id: 'root',
  parent: null,
  name: 'root',
}, {
  id: '1-1',
  parent: 'root',
  name: '1-1',
}, {
  id: '1-2',
  parent: 'root',
  name: '1-2',
}, {
  id: '2-1',
  parent: '1-1',
  name: 'asuka',
}, {
  id: '2-2',
  parent: '1-2',
  name: 'shiori',
}]

describe('should', () => {
  it('exported', () => {
    const ret = composeTree(list)
    expect(ret).toMatchInlineSnapshot(`
      {
        "children": [
          {
            "children": [
              {
                "id": "2-1",
                "name": "asuka",
                "parent": "1-1",
              },
            ],
            "id": "1-1",
            "name": "1-1",
            "parent": "root",
          },
          {
            "children": [
              {
                "id": "2-2",
                "name": "shiori",
                "parent": "1-2",
              },
            ],
            "id": "1-2",
            "name": "1-2",
            "parent": "root",
          },
        ],
        "id": "root",
        "name": "root",
        "parent": null,
      }
    `)
  })
})
