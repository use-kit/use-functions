---
category: '@Core'
---

# getTreeNode

Get tree node.

## Usage

```ts
import { getParentTree, getTreeNode, getTreeNodes } from '@use-kit/functions'

const tree = [{
  id: 'nogi',
  children: [
    { id: 'asuka', parent: 'nogi' }, { id: 'shiori', parent: 'nogi' }
  ],
}]

const node = getTreeNode(tree, node => node.id === 'asuka')
const nodes = getTreeNodes(tree, node => node.parent === 'nogi')
const parent = getParentTree(tree, node => node.id === 'shiori') // The result is consistent with the previous example
```
