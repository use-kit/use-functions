---
category: '@Core'
---

# flattenTree

Flat tree.

## Usage

```ts
import { flattenTree } from '@use-kit/functions'

const tree = [{
  id: 'nogi',
  children: [
    { id: 'asuka', parent: 'nogi' },
    { id: 'shiori', parent: 'nogi' }
  ],
}]

const ret = flattenTree(tree)

// expect:
// [
//   {"id": "asuka", "parent": "nogi" },
//   { "id": "shiori", "parent": "nogi" },
//   { "id": "nogi" }
// ]
```
