---
category: '@Core'
---

# composeTree

Compose tree.

::: tip
It compose tree for one root node, recommended to use [generateTree](https://use-functions.netlify.app/core/generateTree/) to supported multiple root nodes.
:::

## Usage

```ts
import { composeTree } from '@use-kit/functions'

const list = [
  { id: 'nogi', },
  { id: 'asuka', parent: 'nogi' },
  { id: 'shiori', parent: 'nogi' }
]
const ret = composeTree(list)

// expect:
// [
//   {
//     id: 'nogi',
//     children: [
//       { id: 'asuka', parent: 'nogi' }, { id: 'shiori', parent: 'nogi' }
//     ]
//   }
// ]
```
