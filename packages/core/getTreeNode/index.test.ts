import { describe, expect, it } from 'vitest'
import { getParentTree, getTreeNode, getTreeNodes } from '.'

const tree = [{
  id: 'nogi',
  children: [{ id: 'asuka', parent: 'nogi' }, { id: 'shiori', parent: 'nogi' }],
}]

describe('should', () => {
  it('getTreeNode', () => {
    expect(
      getTreeNode(tree, (node: any) => node.id === 'asuka'),
    ).toMatchInlineSnapshot(`
      {
        "id": "asuka",
        "parent": "nogi",
      }
    `)
  })

  it('getTreeNodes', () => {
    expect(
      getTreeNodes(tree, (node: any) => node.parent === 'nogi'),
    ).toMatchInlineSnapshot(`
      [
        {
          "id": "asuka",
          "parent": "nogi",
        },
        {
          "id": "shiori",
          "parent": "nogi",
        },
      ]
    `)
  })

  it('getParentTree', () => {
    expect(getParentTree(tree, (node: any) => node.id === 'shiori')).toMatchInlineSnapshot(`
      [
        {
          "id": "asuka",
          "parent": "nogi",
        },
        {
          "id": "shiori",
          "parent": "nogi",
        },
      ]
    `)
  })
})
